import { Title, Container, Form } from '../components';
import { useUser } from '../contexts/UserContext';

const Login = () => {
  const { user } = useUser();

  return (
    <Container>
      <Title heading="Sign In" subheading={`Welcome back ${user.name}, you've been missed!`} />
      <Form login />
    </Container>
  );
};

export default Login;
