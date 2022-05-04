import React from 'react'

const Button = ({ text, callback }) => {
  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'
      type='button'
      onClick={() => callback()}
    >
      {text}
    </button>
  )
}

export default Button
