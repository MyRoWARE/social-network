import { Title } from '../components';
// import { useUser } from '../contexts/UserContext';
import { LoginForm } from '../components/Form/LoginForm';

const Login = () => (
  // const { user } = useUser();
  <div className="flex flex-col items-center">
    <Title heading="Sign In" subheading={`Welcome back , you've been missed!`} />

    <LoginForm />
  </div>
);
export default Login;
