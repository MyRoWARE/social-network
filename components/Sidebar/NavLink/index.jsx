import { useRouter } from "next/router";

export const NavLink = ({ children, href }) => {
	const router = useRouter();
	const baseClassName = "p-2 rounded-lg";
	const className =
		router.asPath === href
			? baseClassName + " bg-red-500 text-white"
			: baseClassName + "";

	const handleClick = e => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<a href={href} onClick={handleClick} className={className}>
			{children}
		</a>
	);
};
