import React from 'react'
import { Container, CreatePost, PostCard, Sidebar } from '../components'

const Feed = () => {
  return (
    <Container>
      <div className='feed-content w-full flex flex-row'>
        <Sidebar></Sidebar>
        <div className='post-content-container flex flex-col w-full p-0 m-0  '>
          <CreatePost />
          <PostCard />
        </div>
      </div>
    </Container>
  )
}

export default Feed
