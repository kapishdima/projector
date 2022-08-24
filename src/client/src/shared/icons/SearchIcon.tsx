import React from 'react';
import { IconProps, ICON_FILL, ICON_HEIGHT, ICON_WIDTH } from './icons';

export const SearchIcon: React.FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      id="Layer_1"
      width={width || ICON_WIDTH}
      height={height || ICON_HEIGHT}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1">
      <g id="_01_align_center" data-name="01 align center">
        <path
          d="M24,22.586l-6.262-6.262a10.016,10.016,0,1,0-1.414,1.414L22.586,24ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"
          fill={fill || ICON_FILL}
        />
      </g>
    </svg>
  );
};
