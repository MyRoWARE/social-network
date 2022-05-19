import React from 'react'

export const Card = ({ children, height }) => {
  return (
    <div
      className='bg-white mt-24 rounded-lg p-1 
    mx-4 md:mx-auto flex 
    flex-col justify-between 
    gap-5 drop-shadow-xl
    w-full max-w-[580px]
    h-72'
    >
      {children}
    </div>
  )
}
