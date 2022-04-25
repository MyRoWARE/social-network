import React from "react";

export const TextInput = ({ type, inputChange }) => {
	if (type === "name") {
		return (
			<div className="flex gap-2 p-2 rounded-xl border-2 border-gray-400">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-mood-smile h-6"
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
				<input
					className="outline-none"
					type="text"
					placeholder="Your Name"
					onChange={inputChange}
				/>
			</div>
		);
	}
	return (
		<div className="flex gap-2 p-2 rounded-xl border-2 border-gray-400">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-at h-6"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="#2c3e50"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<circle cx="12" cy="12" r="4" />
				<path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
			</svg>
			<input
				className="outline-none"
				type="text"
				placeholder="Your Email"
				onChange={inputChange}
			/>
		</div>
	);
};
