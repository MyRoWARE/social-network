import { MyImage } from '../../MyImage';

export const PostProfileImage = ({ imageSRC }) => (
  <div className="rounded-full overflow-hidden h-12 w-12 relative cursor-pointer">
    <MyImage src={imageSRC} width={60} height={60} alt="Profile picture" />
  </div>
);
