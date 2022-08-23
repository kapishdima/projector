import React from 'react';
import { Button, Card, Grid, Spacer, Text } from '@nextui-org/react';

import { AppsIcon } from '../icons/AppsIcon';
import { TasksIcon } from '../icons/TasksIcon';
import { StatsIcon } from '../icons/StatsIcon';
import { AppNavigation } from './AppNavigation';

export const AppHeader = () => {
  return (
    <Card variant="flat" style={{ minHeight: '96vh', alignItems: 'center' }}>
      <Card.Header css={{ width: 'auto' }}>
        <img
          alt="nextui logo"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width="34px"
          height="34px"
        />
      </Card.Header>
      <Card.Body>
        <AppNavigation />
      </Card.Body>
    </Card>
  );
};
