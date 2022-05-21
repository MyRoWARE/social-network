import { Button } from '../Button';
import { PostProfileImage } from '../PostCard/PostProfileImage';
import { PostInput } from '../PostInput';

export const CreatePost = () => {
  const headerImageSRC =
    'photo-1651772688322-a4c82677a043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8';
  return (
    <div
      className="bg-white mt-8 md:rounded-lg p-5 
    mx-4 md:mx-auto flex 
    flex-col justify-between 
    gap-5 drop-shadow-xl
    w-full max-w-[512px]
    h-auto text-gray-600 my-0"
    >
      <div className="flex justify-between items-center">
        <PostProfileImage imageSRC={headerImageSRC} />
        <PostInput />
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
