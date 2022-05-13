import React from 'react'

export const Button = ({ callback, children }) => {
  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 
      text-white w-full font-bold py-2 px-4 rounded-lg 
      focus:outline-none focus:shadow-outline h-[40px]'
      onClick={() => callback()}
    >
      {children}
    </button>
  )
}
