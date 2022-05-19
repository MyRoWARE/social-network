import React from 'react'
import Image from 'next/image'
import { MyImage } from '../MyImage'
import { PostHeader } from './PostHeader'
import { PostImage } from './PostImage'
import { PostReacted } from './PostReacted'
import { PostReactions } from './PostReactions'
import { PostComments } from './PostComments'

export const PostCard = ({ children }) => {
  return (
    <div
      className='bg-white mt-8 md:rounded-lg p-5 
    mx-4 md:mx-auto flex 
    flex-col justify-between 
    gap-5 drop-shadow-xl
    w-full max-w-[512px]
    h-auto text-gray-600'
    >
      <PostHeader
        headerImageSRC={
          'photo-1651772688322-a4c82677a043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
        }
      />
      <PostImage src='photo-1652113827326-5a47fea17cf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8' />
      <PostReacted />
      <PostReactions />
      <PostComments />
    </div>
  )
}
