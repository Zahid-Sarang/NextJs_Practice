"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
	const router = useRouter();
	const [data, setData] = useState("nothing");

	// logout function
	const logout = async () => {
		try {
			await axios.get("/api/users/logout");
			router.push("/login");
		} catch (error: any) {
			console.log(error.message);
		}
	};

	// get user profile information
	const getUserDetails = async () => {
		try {
			const res = await axios.get("/api/users/me");
			console.log(res.data);
			setData(res.data.data._id);
		} catch (error: any) {
			console.log(error.message);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1>Profile</h1>
			<hr />
			<h2 className="mt-4 bg-white text-black p-4 rounded-xl text-xl font-semibold">
				{data === "nothing" ? (
					"Nothing"
				) : (
					<Link href={`/profile/${data}`}>user-data</Link>
				)}
			</h2>
			<hr />
			<button
				onClick={getUserDetails}
				className="text-xl text-white border-[2px] p-4 m-7 bg-black rounded-lg"
			>
				Get User Data
			</button>
			<button
				onClick={logout}
				className="text-xl text-white border-[2px] p-4 m-7 bg-black rounded-lg"
			>
				LogOut
			</button>
		</div>
	);
}
