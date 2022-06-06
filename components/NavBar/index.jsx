import React from 'react';
import { PostProfileImage } from '../PostCard/PostProfileImage/index';
import { Notifications } from './Notifications';
import { SearchFilter } from './SearchFilter';
import { Sidebar } from '../Sidebar';

export const NavBar = ({ children }) => {
  return (
    <div>
      <div
        className="bg-white mt-24  p-4 
     mx-auto flex 
    sm:flex-row
    lg:flex-row-reverse
    justify-around  
  
    drop-shadow-xl
    h-auto text-gray-600 sticky top-0 "
      >
        <PostProfileImage imageSRC="photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGV8ZW58MHx8MHx8" />
        <SearchFilter />
        <div className="flex lg:hidden ">
          <Notifications />
        </div>
        <div className="hidden sm:hidden md:hidden lg:contents">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
