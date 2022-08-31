import React from 'react';
import { IconProps, ICON_FILL, ICON_HEIGHT, ICON_WIDTH } from './icons';

export const KebabIcon: React.FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      id="Layer_1"
      width={width || ICON_WIDTH}
      height={height || ICON_HEIGHT}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1">
      <circle cx="12" cy="2" r="2" fill={fill || ICON_FILL} />
      <circle cx="12" cy="12" r="2" fill={fill || ICON_FILL} />
      <circle cx="12" cy="22" r="2" fill={fill || ICON_FILL} />
    </svg>
  );
};
