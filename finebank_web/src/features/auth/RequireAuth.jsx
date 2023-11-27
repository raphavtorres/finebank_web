import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

import {
	verifyJWT,
	verifyRefreshToken,
	createJWTWithRefreshToken,
} from "../../services/api";
import {
	selectCurrentAccessToken,
	selectCurrentUser,
	selectCurrentRefreshToken,
} from "./authSlice";
import { setCredentials } from "./authSlice";

export default function RequireAuth() {
	const [page, setPage] = useState();
	const token = useSelector(selectCurrentAccessToken);
	const refresh = useSelector(selectCurrentRefreshToken);
	const user = useSelector(selectCurrentUser);
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			let response = await verifyJWT(token);
			if (!response) {
				response = await verifyRefreshToken(refresh);
				if (response) {
					const access = await createJWTWithRefreshToken(refresh);
					dispatch(setCredentials({ user, access, refresh }));
				}
			}
			response
				? setPage(<Outlet />)
				: setPage(<Navigate to="/login" state={{ from: location }} replace />);
		};
		fetchData();
	}, []);

	return page;
}
