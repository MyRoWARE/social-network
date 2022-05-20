import { Title, Container, Form } from '../components';

const Login = () => (
  <Container>
    <Title heading="Sign In" subheading="Welcome back, you've been missed!" />

    <Form login />
  </Container>
);

export default Login;
