import '../styles/globals.css';
import UserProvider from '../contexts/UserContext';

const MyApp = ({ Component, pageProps }) => (
  <UserProvider>
    <Component {...pageProps} />;
  </UserProvider>
);

export default MyApp;
