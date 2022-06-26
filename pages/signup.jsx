import { Title } from '../components';
import { SignupForm } from '../components/Form/SignupForm';

const Signup = () => (
  <div className="flex flex-col items-center">
    <Title
      heading="Getting Started"
      subheading="Create an account to continue and connect with the people."
    />

    <SignupForm />
  </div>
);

export default Signup;
