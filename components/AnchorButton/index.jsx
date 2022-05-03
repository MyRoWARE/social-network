import React from 'react'

export const AnchorButton = ({ anchorTitle, link }) => {
  return (
    <a
      className='text-base leading-6 mb-4 text-[color:#377DFF]'
      href={`${link || '#'}`}
    >
      {anchorTitle}
    </a>
  )
}
