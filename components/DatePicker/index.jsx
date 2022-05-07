import React from "react";

export const DatePicker = () => {
  return (
    <div className="w-full">
      <div className="flex gap-2 p-2 rounded-xl border-2 border-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLineCap="round"
            strokeLineJoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <input type="date" />
      </div>
    </div>
  );
};
