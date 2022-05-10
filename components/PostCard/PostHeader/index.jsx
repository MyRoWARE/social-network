import React from "react";
import { MyImage } from "../../MyImage";
import { PostProfileImage } from "../PostProfileImage";

export const PostHeader = ({ headerImageSRC }) => {
	return (
		<div className="flex justify-between items-center">
			<div className="flex items-center gap-4">
				<PostProfileImage imageSRC={headerImageSRC} />
				<div className="text-xl">
					<p className="text-sm">Sepural Gallery</p>
					<p className="text-gray-400 text-xs">15h. Public</p>
				</div>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-4 w-4 hover:text-blue-500 cursor-pointer"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
				/>
			</svg>
		</div>
	);
};
