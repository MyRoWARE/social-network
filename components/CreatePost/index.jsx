import { Button } from '../Button';
import { PostProfileImage } from '../PostCard/PostProfileImage';
import { PostInput } from '../PostInput';

export const CreatePost = ({ newPost }) => {
  const headerImageSRC =
    'photo-1651772688322-a4c82677a043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8';

  if (newPost) {
    return (
      <div
        className="bg-white mt-8 md:rounded-xl p-5 
        mx-4 md:mx-auto flex 
        flex-col justify-between 
        gap-5 drop-shadow-xl
        w-full max-w-[512px]
        h-auto text-gray-600 my-0"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:hidden"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Create a post
          </h3>
          <div className="flex gap-6">
            <div className="text-gray-400">Visible for</div>
            <div className="flex gap-4 hover:text-blue-500 cursor-pointer">
              Friends
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="hover:text-blue-500 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <hr className="border border-gray-300" />
        <div className="flex justify-between">
          <PostProfileImage imageSRC={headerImageSRC} />
          <PostInput />
        </div>
        <div className="md:flex md:justify-between text-md">
          <div className="mb-4 flex items-center gap-2 hover:text-blue-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Live Video
          </div>
          <div className="mb-4 flex items-center gap-2 hover:text-blue-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Photo/Video
          </div>
          <div className="mb-4 flex items-center gap-2 hover:text-blue-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>{' '}
            Feeling
          </div>
          <div className="w-full md:w-24">
            <Button>Post</Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="bg-white mt-8 md:rounded-xl p-5 
    mx-4 md:mx-auto flex 
    flex-col justify-between 
    gap-5 drop-shadow-xl
    w-full max-w-[512px]
    h-auto text-gray-600 my-0"
    >
      <div className="flex justify-between items-center">
        <PostProfileImage imageSRC={headerImageSRC} />
        <PostInput size="small" />
      </div>
      <div className="flex flex-row-reverse">
        <div className="w-24">
          <Button>Post</Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
