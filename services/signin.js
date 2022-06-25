import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

// signin Auth

export const signin = async () => {
  try {
    const user = await signInWithEmailAndPassword(auth, signinEmail, signinPassword);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
