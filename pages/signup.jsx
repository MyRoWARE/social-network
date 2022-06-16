import { Form, Title } from '../components';

const Signup = () => (
  <div className="flex flex-col items-center">
    <Title
      heading="Getting Started"
      subheading="Create an account to continue and connect with the people."
    />

    <Form signup />
  </div>
);

export default Signup;
