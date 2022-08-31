import React from 'react';
import { IconProps, ICON_FILL, ICON_HEIGHT, ICON_WIDTH } from './icons';

export const AngleRightIcon: React.FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Outline"
      viewBox="0 0 24 24"
      width={width || ICON_WIDTH}
      height={height || ICON_HEIGHT}>
      <path
        d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z"
        fill={fill || ICON_FILL}
      />
    </svg>
  );
};
