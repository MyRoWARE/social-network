import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Title, Form } from '../components';
// import { useUser } from '../contexts/UserContext';

const Login = () => (
  // const { user } = useUser();
  <div className="flex flex-col items-center">
    <Title heading="Sign In" subheading={`Welcome back , you've been missed!`} />

    <Form login />
  </div>
);
export default Login;
