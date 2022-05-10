import React from "react";

export const PostComment = () => {
	return (
		<div className="relative">
			<input
				className="bg-gray-200 rounded-xl p-2 w-full text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
				id="inline-full-name"
				type="text"
				value=""
				placeholder="Write a comment"
			/>
			<div className="flex gap-2 absolute top-1/3 right-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-mood-smile h-4 w-4"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="#2c3e50"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<circle cx="12" cy="12" r="9" />
					<line x1="9" y1="10" x2="9.01" y2="10" />
					<line x1="15" y1="10" x2="15.01" y2="10" />
					<path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-mood-smile h-4 w-4"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="#2c3e50"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<circle cx="12" cy="12" r="9" />
					<line x1="9" y1="10" x2="9.01" y2="10" />
					<line x1="15" y1="10" x2="15.01" y2="10" />
					<path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-mood-smile h-4 w-4"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="#2c3e50"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<circle cx="12" cy="12" r="9" />
					<line x1="9" y1="10" x2="9.01" y2="10" />
					<line x1="15" y1="10" x2="15.01" y2="10" />
					<path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
				</svg>
			</div>
		</div>
	);
};
