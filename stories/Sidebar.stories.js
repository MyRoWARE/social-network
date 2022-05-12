import { Sidebar } from "../components";
const Template = args => <Sidebar {...args} />;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "Sidebar",
	component: Sidebar,
};

export const activeFeedSidebar = Template.bind({});

activeFeedSidebar.story = {
	parameters: {
		nextRouter: {
			path: "/",
			asPath: "/",
			// query: {
			//   id: "lifeiscontent",
			// },
		},
	},
};

export const activeCommunitySidebar = Template.bind({});

activeCommunitySidebar.story = {
	parameters: {
		nextRouter: {
			path: "/community",
			asPath: "/community",
			// query: {
			//   id: "lifeiscontent",
			// },
		},
	},
};

export const activeMessagesSidebar = Template.bind({});

activeMessagesSidebar.story = {
	parameters: {
		nextRouter: {
			path: "/messages",
			asPath: "/messages",
			// query: {
			//   id: "lifeiscontent",
			// },
		},
	},
};

export const activenotificationSidebar = Template.bind({});

activenotificationSidebar.story = {
	parameters: {
		nextRouter: {
			path: "/notification",
			asPath: "/notification",
			// query: {
			//   id: "lifeiscontent",
			// },
		},
	},
};

export const activeExploreSidebar = Template.bind({});

activeExploreSidebar.story = {
	parameters: {
		nextRouter: {
			path: "/explore",
			asPath: "/explore",
			// query: {
			//   id: "lifeiscontent",
			// },
		},
	},
};

export const activeProfioleSidebar = Template.bind({});

activeProfioleSidebar.story = {
	parameters: {
		nextRouter: {
			path: "/profile",
			asPath: "/profile",
			// query: {
			//   id: "lifeiscontent",
			// },
		},
	},
};

export const activeSettingSidebar = Template.bind({});

activeSettingSidebar.story = {
	parameters: {
		nextRouter: {
			path: "/settings",
			asPath: "/settings",
			// query: {
			//   id: "lifeiscontent",
			// },
		},
	},
};
