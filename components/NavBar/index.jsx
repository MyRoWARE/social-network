import React from "react";
import { PostProfileImage } from "../PostCard/PostProfileImage/index";
import { SearchFilter } from "./SearchFilter";

export const NavBar = ({ children }) => {
  return (
    <div
      className="bg-white mt-24 md:rounded-lg p-5 
    mx-4 md:mx-auto flex 
    flex-col justify-between 
    gap-5 drop-shadow-xl
    w-full max-w-[512px]
    h-auto text-gray-600"
    >
      <PostProfileImage imageSRC="photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGV8ZW58MHx8MHx8" />
      <SearchFilter />
    </div>
  );
};
