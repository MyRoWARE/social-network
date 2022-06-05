import React from 'react';
import { PostProfileImage } from '../PostCard/PostProfileImage/index';
import { Notifications } from './Notifications';
import { SearchFilter } from './SearchFilter';

export const NavBar = ({ children }) => {
  return (
    <div>
      <div
        className=" lg:hidden bg-white mt-24  p-4 
     md:mx-auto flex 
    flex-row justify-around  
    drop-shadow-xl
    h-auto text-gray-600 sticky top-0 "
      >
        <PostProfileImage imageSRC="photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGV8ZW58MHx8MHx8" />
        <SearchFilter />
        <Notifications />
      </div>
      <div
        className=" sm:hidden md:hidden bg-white mt-24  p-4 
     md:mx-auto flex 
    flex-row justify-around  
    drop-shadow-xl
    h-auto text-gray-600 sticky top-0 "
      >
        <PostProfileImage imageSRC="photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGV8ZW58MHx8MHx8" />
        <SearchFilter />
        <Notifications />
      </div>
    </div>
  );
};
