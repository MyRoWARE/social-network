import Image from "next/image";

export const myLoader = ({ src, width, quality }) => {
	return `https://images.unsplash.com/${src}?auto=format&w=${width}&q=${
		quality || 80
	}`;
};

export const MyImage = ({ src, alt }) => {
	return (
		<Image
			loader={myLoader}
			src={src}
			alt={alt}
			layout="fill"
			objectFit="cover"
		/>
	);
};
