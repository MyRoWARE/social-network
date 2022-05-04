import React from 'react'
import { TextInput } from '../NameInput'
import { GoogleExternalSignup, AppleExternalSignup } from './ExternalSignup'

export const Form = ({ login, signup }) => {
  return (
    <form className='bg-white rounded-lg p-5 mx-4 md:mx-auto flex flex-col justify-between gap-5 drop-shadow-xl'>
      <div className='signup-with flex justify-between'>
        <GoogleExternalSignup />
        <AppleExternalSignup />
      </div>

      <div className='relative flex py-2 items-center'>
        <div className='flex-grow border-t border-gray-300'></div>
        <span className='flex-shrink mx-4 text-gray-600'>OR</span>
        <div className='flex-grow border-t border-gray-300'></div>
      </div>

      <TextInput type='name' />
      <TextInput type='email' />

      <button
        className='bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'
        type='button'
      >
        Sign Up
      </button>
      <small className='mx-auto'>
        Already have an account?{' '}
        <a className='text-blue-500 hover:text-blue-700' href='#'>
          Sign In
        </a>
      </small>
    </form>
  )
}
