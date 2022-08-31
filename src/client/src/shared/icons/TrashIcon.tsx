import React from 'react';
import { IconProps, ICON_FILL, ICON_HEIGHT, ICON_WIDTH } from './icons';

export const TrashIcon: React.FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      id="Layer_1"
      width={width || ICON_WIDTH}
      height={height || ICON_HEIGHT}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1">
      <path
        d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"
        fill={fill || ICON_FILL}
      />
      <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z" fill={fill || ICON_FILL} />
      <path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" fill={fill || ICON_FILL} />
    </svg>
  );
};
