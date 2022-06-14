import { NavBar } from '../components/NavBar';

const Template = (args) => <NavBar {...args} />;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'NavBar',
  component: NavBar,
};

export const MobileNavBar = Template.bind({});
