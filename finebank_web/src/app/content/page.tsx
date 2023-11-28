"use client";

import PrivateRoute from "@/auth/PrivateRoute";
import Container from "@/components/Container";

export default function Page() {
	return (
		<PrivateRoute>
			<section className="flex w-full h-full bg-primary-black">
				<Container>
					<div className="flex justify-center h-[80%] w-full">
						<h1>CONTENT PAGE</h1>
					</div>
				</Container>
			</section>
		</PrivateRoute>
	);
}
