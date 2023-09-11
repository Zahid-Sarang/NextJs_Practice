"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

const LoginPage = () => {
	const [user, setUser] = React.useState({
		email: "",
		password: "",
	});

	const onLogin = async () => {};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1 className="text-center text-white text-2xl my-4">Login</h1>
			<hr />

			{/* email */}
			<label htmlFor="email">email</label>
			<input
				className="p-3 my-5 rounded-xl"
				id="email"
				type="email"
				value={user.email}
				onChange={(e) => setUser({ ...user, email: e.target.value })}
				placeholder="email"
			/>
			{/* password */}
			<label htmlFor="password">password</label>
			<input
				className="p-3 my-5 rounded-xl"
				id="password"
				type="password"
				value={user.password}
				onChange={(e) => setUser({ ...user, password: e.target.value })}
				placeholder="password"
			/>
			<button
				onClick={onLogin}
				className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
			>
				Login here
			</button>
			<Link href="/signup">Visit SignUp Page</Link>
		</div>
	);
};

export default LoginPage;
