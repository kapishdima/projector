import React from 'react';
import { IconProps, ICON_FILL, ICON_HEIGHT, ICON_WIDTH } from './icons';

export const CalendarIcon: React.FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Outline"
      viewBox="0 0 24 24"
      width={width || ICON_WIDTH}
      height={height || ICON_HEIGHT}>
      <path
        d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V7A5.006,5.006,0,0,0,19,2ZM2,7A3,3,0,0,1,5,4H19a3,3,0,0,1,3,3V8H2ZM19,22H5a3,3,0,0,1-3-3V10H22v9A3,3,0,0,1,19,22Z"
        fill={fill || ICON_FILL}
      />
      <circle cx="12" cy="15" r="1.5" fill={fill || ICON_FILL} />
      <circle cx="7" cy="15" r="1.5" fill={fill || ICON_FILL} />
      <circle cx="17" cy="15" r="1.5" fill={fill || ICON_FILL} />
    </svg>
  );
};