import React from "react";
import { TextInput } from "../NameInput";
import { GoogleExternalSignup, AppleExternalSignup } from "./ExternalSignup";
import { Button } from "../Button";
import { PasswordInput } from "../PasswordInput";
import { GenderInput } from "../GenderInput";

export const Form = ({ login, signup }) => {
  return (
    <form className="bg-white rounded-lg p-5 mx-4 md:mx-auto flex flex-col justify-between gap-5 drop-shadow-xl">
      <div className="signup-with flex justify-between">
        <GoogleExternalSignup />
        <AppleExternalSignup />
      </div>

      <div className="relative flex py-2 items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-600">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <TextInput type="name" />
      {signup && <TextInput type="email" />}

      {signup && <GenderInput />}

      {signup && <Button>Sign Up</Button>}

      {signup && (
        <small className="mx-auto">
          {`Already have an account?`}
          <a className="text-blue-500 hover:text-blue-700" href="#">
            Sign In
          </a>
        </small>
      )}

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
