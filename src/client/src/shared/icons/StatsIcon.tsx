import React from 'react';
import { IconProps, ICON_FILL, ICON_HEIGHT, ICON_WIDTH } from './icons';

export const StatsIcon: React.FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Outline"
      viewBox="0 0 24 24"
      width={width || ICON_WIDTH}
      height={height || ICON_HEIGHT}>
      <path
        d="M23,22H3a1,1,0,0,1-1-1V1A1,1,0,0,0,0,1V21a3,3,0,0,0,3,3H23a1,1,0,0,0,0-2Z"
        fill={fill || ICON_FILL}
      />
      <path d="M15,20a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v7A1,1,0,0,0,15,20Z" fill={fill || ICON_FILL} />
      <path d="M7,20a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v7A1,1,0,0,0,7,20Z" fill={fill || ICON_FILL} />
      <path d="M19,20a1,1,0,0,0,1-1V7a1,1,0,0,0-2,0V19A1,1,0,0,0,19,20Z" fill={fill || ICON_FILL} />
      <path d="M11,20a1,1,0,0,0,1-1V7a1,1,0,0,0-2,0V19A1,1,0,0,0,11,20Z" fill={fill || ICON_FILL} />
    </svg>
  );
};