import '../styles/globals.css';
import UserProvider from '../contexts/UserContext';
import { Container } from '../components';

const MyApp = ({ Component, pageProps }) => (
  <UserProvider>
    <Container>
      <Component {...pageProps} />;
    </Container>
  </UserProvider>
);

export default MyApp;
