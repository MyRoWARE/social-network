import { PostComment } from '../PostComment';
import { PostProfileImage } from '../PostProfileImage';

export const PostComments = () => (
  <div className="flex items-center justify-between gap-4">
    <div className="">
      <PostProfileImage imageSRC="photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGV8ZW58MHx8MHx8" />
    </div>
    <div className="flex-1">
      <PostComment />
    </div>
    <div className="send hover:bg-blue-200 cursor-pointer p-2 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-send hover:text-blue-500 cursor-pointer"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeWinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="10" y1="14" x2="21" y2="3" />
        <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
      </svg>
    </div>
  </div>
);
