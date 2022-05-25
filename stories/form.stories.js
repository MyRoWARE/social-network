import { Form } from '../components/Form';

const Template = (args) => <Form {...args} />;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Form',
  component: Form,
};

export const Signup = Template.bind({});
Signup.args = {
  signup: true,
};

export const Login = Template.bind({});
Login.args = {
  login: true,
};
