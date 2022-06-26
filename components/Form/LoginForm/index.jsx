/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { TextInput } from '../NameInput';
import { GoogleExternalSignup, AppleExternalSignup } from '../ExternalSignup';
import { Button } from '../../Button';
import { PasswordInput } from '../PasswordInput';
import { auth } from '../../../services/firebase';

export const LoginForm = ({ login }) => {
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('password');
  const [user, setUser] = useState({ email: 'NO EMAIL' });

  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log('CURRENT USER', currentUser);
      setUser(currentUser);
      if (currentUser) {
        console.log('LOGGED IN');
      } else {
        console.log('LOGGED OUT');
      }
    });
  }, []);

  const firebaseLogin = async () => {
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
      console.log('LOGGING IN', userData, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form className="bg-white rounded-lg p-5 min-w-[400px] w-full max-w-xl mx-4 md:mx-auto flex flex-col justify-between gap-5 drop-shadow-xl">
      <div className="signup-with flex justify-between">
        <GoogleExternalSignup login={login} />
        <AppleExternalSignup login={login} />
      </div>
      <h1>User {user?.email}</h1>
      <div className="relative flex py-2 items-center">
        <div className="flex-grow border-t border-gray-300" />
        <span className="flex-shrink mx-4 text-gray-600">OR</span>
        <div className="flex-grow border-t border-gray-300" />
      </div>
      <TextInput type="email" value={email} inputChange={setEmail} />
      <PasswordInput password={password} setPassword={setPassword} />
      <Button callback={() => firebaseLogin()}>Login</Button>
      <small className="mx-auto">
        {`Don't have an account?  `}
        <a
          role="link"
          className="text-blue-500 hover:text-blue-700 ml-2"
          tabIndex={0}
          onClick={() => router.push('/signup')}
          onKeyPress={() => router.push('/signup')}
        >
          Sign Up
        </a>
      </small>
    </form>
  );
};
