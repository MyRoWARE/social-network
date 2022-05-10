import React from "react";
import { MyImage } from "../../MyImage";
import { PostProfileImage } from "../PostProfileImage";

export const PostReacted = () => {
	return (
		<div className="flex justify-between relative">
			<div className="flex ">
				<div className="">
					<PostProfileImage imageSRC="photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D" />
				</div>
				<div className="absolute left-6">
					<PostProfileImage imageSRC="photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8" />
				</div>
				<div className="absolute left-12">
					<PostProfileImage imageSRC="photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D" />
				</div>
			</div>
			<div className="flex gap-4 ">
				<div className="">3 Comments</div>
				<div className="">17 Share</div>
			</div>
		</div>
	);
};
