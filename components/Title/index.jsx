import React from 'react'

export const Title = ({ heading, subheading }) => {
  return (
    <div className='header w-100 flex flex-col items-center text-3xl text-gray-600'>
      <h1 className='font-black m-2.5'>{heading}</h1>
      <h2 className=' text-base leading-6 mb-4'>{subheading}</h2>
    </div>
  )
}

//
