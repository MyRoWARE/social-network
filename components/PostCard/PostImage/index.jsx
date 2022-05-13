import React from "react";
import { MyImage, myLoader } from "../../MyImage";
import "./postimage.css";
import Image from "next/image";

export const PostImage = ({ src }) => {
	return (
		<div className="rounded-lg h-48 w-full relative overflow-hidden">
			<MyImage src={src} alt={"Profile picture"} />
		</div>
	);
};
