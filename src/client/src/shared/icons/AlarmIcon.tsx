import React from 'react';
import { IconProps, ICON_FILL, ICON_HEIGHT, ICON_WIDTH } from './icons';

export const AlarmIcon: React.FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Outline"
      viewBox="0 0 24 24"
      width={width || ICON_WIDTH}
      height={height || ICON_HEIGHT}>
      <path
        d="M13,2.051V1a1,1,0,0,0-2,0V2.051A10.98,10.98,0,0,0,3.681,20.176,3.024,3.024,0,0,0,2,23a1,1,0,0,0,2,0,1.2,1.2,0,0,1,1.11-1.229.932.932,0,0,0,.2-.062,10.924,10.924,0,0,0,13.39,0,1.033,1.033,0,0,0,.182.064A1.2,1.2,0,0,1,20,23a1,1,0,0,0,2,0,3.024,3.024,0,0,0-1.681-2.824A10.98,10.98,0,0,0,13,2.051ZM3,13a9,9,0,1,1,9,9A9.011,9.011,0,0,1,3,13Z"
        fill={fill || ICON_FILL}
      />
      <path
        d="M19.215,0a1,1,0,0,0,0,2A2.59,2.59,0,0,1,22,4.5a1,1,0,0,0,2,0A4.6,4.6,0,0,0,19.215,0Z"
        fill={fill || ICON_FILL}
      />
      <path
        d="M2,4.5A2.59,2.59,0,0,1,4.785,2a1,1,0,0,0,0-2A4.6,4.6,0,0,0,0,4.5a1,1,0,0,0,2,0Z"
        fill={fill || ICON_FILL}
      />
      <path
        d="M13,11.586V7a1,1,0,0,0-2,0v5a1,1,0,0,0,.293.707l3,3a1,1,0,0,0,1.414-1.414Z"
        fill={fill || ICON_FILL}
      />
    </svg>
  );
};
