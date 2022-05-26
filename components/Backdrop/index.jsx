import React from 'react';

export const Backdrop = ({ children, show }) => {
  const showBackdrop = show ? 'block' : 'hidden';

  return (
    <div className={`relative h-screen w-screen ${showBackdrop} bg-black bg-opacity-50`}>
      <div className="absolute w-full top-1/4 opacity-1">{children}</div>
    </div>
  );
};
