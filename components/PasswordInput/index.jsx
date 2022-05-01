import React from 'react'

export const PasswordInput = ({ inputChange, error }) => {
  return (
    <div className='w-full'>
      <div className='flex gap-2 p-2 rounded-xl border-2 border-gray-400'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-lock'
          width='44'
          height='44'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='#2c3e50'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <rect x='5' y='11' width='14' height='10' rx='2' />
          <circle cx='12' cy='16' r='1' />
          <path d='M8 11v-4a4 4 0 0 1 8 0v4' />
        </svg>

        <input
          className='outline-none'
          type='password'
          placeholder='Your password'
          required
          onChange={inputChange}
        />
      </div>
      <p
        style={{
          color: '#FF5630',
          display: error ? 'block' : 'none'
        }}
      >
        Please enter a valid password
      </p>
    </div>
  )
}
