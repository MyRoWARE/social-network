import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Title, Form } from '../components';
// import { useUser } from '../contexts/UserContext';

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
const Login = () => (
  // const { user } = useUser();
  <div className="flex flex-col items-center">
    <Title heading="Sign In" subheading={`Welcome back , you've been missed!`} />

    <Form login />
  </div>
);
export default Login;
