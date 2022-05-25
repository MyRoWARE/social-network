export const PostInput = ({ inputChange, size }) => {
  const padding = size === 'small' ? '2' : '32';

  return (
    <input
      className={`flex gap-2 w-full ml-4 p-2 pb-${padding} pt-4 rounded-xl border-2 border-none h-12 outline-none bg-[#4E5D780D]`}
      type="text"
      placeholder="What's happening?"
      required
      onChange={inputChange}
    />
  );
};
