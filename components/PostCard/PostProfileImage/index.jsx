import React from "react";
import { MyImage } from "../../MyImage";

export const PostProfileImage = ({ imageSRC }) => {
	return (
		<div className="rounded-full overflow-hidden h-8 w-8 relative cursor-pointer">
			<MyImage src={imageSRC} width={60} height={60} alt={"Profile picture"} />
		</div>
	);
};
