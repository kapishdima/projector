import { Row, Badge, Spacer, Text } from '@nextui-org/react';
import React from 'react';

type ProjectStatusBadgeProps = {
  completed: boolean;
};

const colors: Array<'primary' | 'success'> = ['primary', 'success'];
const values = ['In Progress', 'Completed'];

export const ProjectStatusBadge: React.FC<ProjectStatusBadgeProps> = ({ completed }) => {
  const color = colors[+completed];
  const value = values[+completed];

  return (
    <Row align="center">
      <Badge size="xs" variant="dot" color={color} css={{ border: 'none' }}></Badge>
      <Spacer x={0.2} />
      <Text b size={12} color={color}>
        {value}
      </Text>
    </Row>
  );
};
