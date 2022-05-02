import React from "react";

export const AnchorButtons = ({ anchorTitle }) => {
  return (
    <div>
      <a className="text-base leading-6 mb-4 text-[color:#377DFF]" href="#">
        {anchorTitle}
      </a>
    </div>
  );
};
