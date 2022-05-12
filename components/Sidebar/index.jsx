import Link from "next/link";
import { useRouter } from "next/router";
import {
	earthSVG,
	feedSVG,
	communitySVG,
	messageSVG,
	notificationSVG,
	userSVG,
	settingsSVG,
	logoutSVG,
} from "./SVGs";

export const Sidebar = () => {
	const navs = [
		{ name: "Feed", path: "/", comp: feedSVG, notification: 0 },
		{
			name: "My Community",
			path: "/community",
			comp: communitySVG,
			notification: 0,
		},
		{ name: "Messages", path: "/messages", comp: messageSVG, notification: 0 },
		{
			name: "Notification",
			path: "/notification",
			comp: notificationSVG,
			notification: 2,
		},
		{ name: "Explore", path: "/explore", comp: earthSVG, notification: 0 },
		{ name: "Profile", path: "/profile", comp: userSVG, notification: 0 },
		{ name: "Settings", path: "/settings", comp: settingsSVG, notification: 0 },
		{ name: "Logout", path: "/logout", comp: logoutSVG, notification: 0 },
	];

	const router = useRouter();
	const baseClassName =
		"flex gap-3 items-center p-4 py-4 my-2 rounded-lg hover:bg-[#4E5D78] hover:text-white cursor-pointer";

	const navsList = (
		<ul>
			{navs.map(nav => {
				const className =
					router.asPath === nav.path
						? baseClassName + " bg-[#4E5D78] text-white"
						: baseClassName + "";

				return (
					<li key={nav.path} className={className}>
						{nav.comp}
						<Link href={nav.path}>{nav.name}</Link>
						{nav.notification ? (
							<div className="flex items-center justify-center bg-red-500 rounded-full text-white h-5 w-5">
								2
							</div>
						) : null}
					</li>
				);
			})}
		</ul>
	);
	return <div className="">{navsList}</div>;
};
