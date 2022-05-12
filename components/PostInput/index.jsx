import React from 'react'

export const PostInput = ({ inputChange }) => {
  return (
    <input
      className='flex gap-2 p-2 rounded-xl border-2 border-none h-12 outline-none pl-4 bg-[#4E5D780D] w-full ml-4'
      type='text'
      placeholder="What's happening?"
      required
      onChange={inputChange}
    />
  )
}
