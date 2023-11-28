// components/PrivateRoute.tsx
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth, AuthContextType } from "./AuthContext";
import { verifyJWT } from "@/services/api";

// Define the props interface for PrivateRoute
interface PrivateRouteProps {
	children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
	// Destructure the user from the AuthContextType
	const { jwt, logout } = useAuth() as AuthContextType;
	const router = useRouter();

	useEffect(() => {
		async function handleJWTVerification(jwt: any) {
			!(await verifyJWT(jwt)) ? logout() : router.push("/content");
		}

		// Redirect to the login page if the user is not authenticated
		jwt ? handleJWTVerification(jwt) : router.push("/login");
	}, [jwt, router]);

	// Render the component only if the user is authenticated
	return jwt ? <>{children}</> : null;
};

export default PrivateRoute;
