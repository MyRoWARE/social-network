import { Sidebar } from '../components';

const Template = (args) => <Sidebar {...args} />;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Sidebar',
  component: Sidebar,
};

export const ActiveFeedSidebar = Template.bind({});

ActiveFeedSidebar.story = {
  parameters: {
    nextRouter: {
      path: '/',
      asPath: '/',
      // query: {
      //   id: "lifeiscontent",
      // },
    },
  },
};

export const ActiveCommunitySidebar = Template.bind({});

ActiveCommunitySidebar.story = {
  parameters: {
    nextRouter: {
      path: '/community',
      asPath: '/community',
      // query: {
      //   id: "lifeiscontent",
      // },
    },
  },
};

export const ActiveMessagesSidebar = Template.bind({});

ActiveMessagesSidebar.story = {
  parameters: {
    nextRouter: {
      path: '/messages',
      asPath: '/messages',
      // query: {
      //   id: "lifeiscontent",
      // },
    },
  },
};

export const ActivenotificationSidebar = Template.bind({});

ActivenotificationSidebar.story = {
  parameters: {
    nextRouter: {
      path: '/notification',
      asPath: '/notification',
      // query: {
      //   id: "lifeiscontent",
      // },
    },
  },
};

export const ActiveExploreSidebar = Template.bind({});

ActiveExploreSidebar.story = {
  parameters: {
    nextRouter: {
      path: '/explore',
      asPath: '/explore',
      // query: {
      //   id: "lifeiscontent",
      // },
    },
  },
};

export const ActiveProfioleSidebar = Template.bind({});

ActiveProfioleSidebar.story = {
  parameters: {
    nextRouter: {
      path: '/profile',
      asPath: '/profile',
      // query: {
      //   id: "lifeiscontent",
      // },
    },
  },
};

export const ActiveSettingSidebar = Template.bind({});

ActiveSettingSidebar.story = {
  parameters: {
    nextRouter: {
      path: '/settings',
      asPath: '/settings',
      // query: {
      //   id: "lifeiscontent",
      // },
    },
  },
};
