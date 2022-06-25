import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Form, Title } from '../components';

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
