import React from "react";

export const AnchorButtons = ({ anchorLink, anchorTitle }) => {
  return (
    <div>
      <a className="text-xs" href={anchorLink}>
        {anchorTitle} Sign In
      </a>
    </div>
  );
};
