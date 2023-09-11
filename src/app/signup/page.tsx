"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

const SignupPage = () => {
	const [user, setUser] = React.useState({
		email: "",
		password: "",
		username: "",
	});

const onSignup = async () => {}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1 className="text-center text-white text-2xl my-4">SignUp</h1>
			<hr />
			{/* username */}
			<label htmlFor="username">username</label>
			<input
				className="p-3 my-5 rounded-xl"
				id="username"
				type="text"
				value={user.username}
				onChange={(e) => setUser({ ...user, username: e.target.value })}
				placeholder="Username"
			/>
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
			<button onClick={onSignup} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
        SignUp here
      </button>
      <Link href="/login">Visit Login Page</Link>
		</div>
	);
};

export default SignupPage;
