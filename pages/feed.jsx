import { useEffect } from 'react';
import { CreatePost, PostCard, Sidebar } from '../components';

const Feed = () => {
  useEffect(() => {}, []);

  return (
    <div className="feed-content w-full flex flex-row">
      <Sidebar />
      <div className="post-content-container flex flex-col w-full p-0 m-0  ">
        <CreatePost />
        <PostCard />
      </div>
    </div>
  );
};

export default Feed;
