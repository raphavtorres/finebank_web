import { useState, useEffect } from "react";
import Image from "next/image";

import { getProfilePic } from "@/services/api";
import ProfilePic from "@/assets/profile-default-picture-img.png";

export default function UserPicture() {
	const [picture, setPicture] = useState(ProfilePic);

	useEffect(() => {
		async function fetchData() {
			const profilePic = await getProfilePic();
			profilePic[0].picture && setPicture(profilePic[0].picture);
		}
		fetchData();
	}, []);

	return (
		<div>
			<Image
				src={picture}
				alt="logo"
				width={60}
				height={60}
				className="rounded-full"
			/>
		</div>
	);
}
