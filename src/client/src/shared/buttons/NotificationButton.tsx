import React from 'react';

import { Button, Card, Col, Grid, Popover } from '@nextui-org/react';
import { NotificationsIcon } from '../icons/NotificationsIcon';

export const NotificationButton = () => {
  return (
    <Popover isBordered placement="right-top">
      <Popover.Trigger>
        <Button auto flat color="success" icon={<NotificationsIcon fill="white" />}></Button>
      </Popover.Trigger>
      <Popover.Content>
        <NotificationButtonContent />
      </Popover.Content>
    </Popover>
  );
};

const NotificationButtonContent = () => {
  return (
    <Grid.Container
      css={{
        borderRadius: '14px',
        padding: '0.4rem',
        minHeight: 400,
        minWidth: 400,
      }}>
      <Card>
        <Card.Header>Notifications</Card.Header>
      </Card>
    </Grid.Container>
  );
};
