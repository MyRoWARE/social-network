export const PostReactions = () => (
  <div className="flex justify-between py-1 border-t-2 border-b-2 border-gray-300">
    <div className="flex gap-1 items-center hover:text-blue-500 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
      Like
    </div>
    <div className="flex gap-1 items-center hover:text-blue-500 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
      Comments
    </div>
    <div className="flex gap-1 items-center hover:text-blue-500 cursor-pointer">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        stroke="currentColor"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M490.57,427.47H190.49a21.43,21.43,0,0,1-15.15-36.59l94.35-94.35c-25.08-23-58.36-35.85-93.85-35.85-66.18,0-122.24,44.69-133.31,106.27A21.43,21.43,0,0,1,.09,361.24C23,108.89,232.53,106,234.64,106c61,0,119.27,22.51,163.18,62.43l77.59-77.58A21.43,21.43,0,0,1,512,106V406A21.43,21.43,0,0,1,490.57,427.47ZM242.24,384.61H469.13V157.71L413,213.85a20.79,20.79,0,0,1-15.68,6.27,21.4,21.4,0,0,1-15.35-7c-37-40.84-90.73-64.26-147.32-64.26-5.31,0-102.79,2.17-157.39,97.35a183.54,183.54,0,0,1,98.58-28.36c55.1,0,106.24,23.91,140.3,65.61a21.43,21.43,0,0,1-1.44,28.72Z" />
      </svg>
      Share
    </div>
  </div>
);
