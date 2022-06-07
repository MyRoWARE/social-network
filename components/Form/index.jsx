/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRouter } from 'next/router';
import { TextInput } from './NameInput';
import { GoogleExternalSignup, AppleExternalSignup } from './ExternalSignup';
import { Button } from '../Button';
import { PasswordInput } from './PasswordInput';
import { DatePicker } from '../DatePicker';

export const Form = ({ login, signup }) => {
  const router = useRouter();

  return (
    <form className="bg-white rounded-lg p-5 md:min-w-[500px] max-w-2xl  mx-4 md:mx-auto flex flex-col justify-between gap-5 drop-shadow-xl">
      <div className="signup-with flex justify-between">
        <GoogleExternalSignup login={login} />
        <AppleExternalSignup login={login} />
      </div>

      <div className="relative flex py-2 items-center">
        <div className="flex-grow border-t border-gray-300" />
        <span className="flex-shrink mx-4 text-gray-600">OR</span>
        <div className="flex-grow border-t border-gray-300" />
      </div>

      {signup && <TextInput type="name" />}
      {signup && <TextInput type="email" />}
      {signup && <PasswordInput />}
      {signup && <DatePicker />}
      {signup && <Button>Sign Up</Button>}

      {signup && (
        <small className="mx-auto">
          Already have an account?
          <a
            role="link"
            className="text-blue-500 hover:text-blue-700"
            tabIndex={0}
            onClick={() => router.push('/login')}
            onKeyPress={() => router.push('/login')}
          >
            Sign In
          </a>
        </small>
      )}

      {login && <TextInput type="email" />}
      {login && <PasswordInput />}
      {login && <Button>Login</Button>}

      {login && (
        <small className="mx-auto">
          {`Don't have an account?  `}
          <a className="text-blue-500 hover:text-blue-700" href="#">
            Sign Up
          </a>
        </small>
      )}
    </form>
  );
};
