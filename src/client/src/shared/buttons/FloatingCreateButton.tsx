import React from 'react';

import { Button, Col, Grid, Popover } from '@nextui-org/react';
import { PlusIcon } from '../icons/PlusIcon';
import { AppsIcon } from '../icons/AppsIcon';
import { TasksIcon } from '../icons/TasksIcon';

export const FloatingCreateButton = () => {
  return (
    <Popover isBordered placement="top-left">
      <Popover.Trigger>
        <Button
          auto
          rounded
          color="primary"
          iconRight={<PlusIcon fill="#ffffff" />}
          css={{ position: 'fixed', bottom: '5%', right: '2%' }}></Button>
      </Popover.Trigger>
      <Popover.Content>
        <CreateButtonList />
      </Popover.Content>
    </Popover>
  );
};

const CreateButtonList = () => {
  return (
    <Grid.Container css={{ borderRadius: '14px', padding: '0.4rem' }}>
      <Col>
        <Button auto light icon={<AppsIcon fill="white" />}>
          New Project
        </Button>
        <Button auto light icon={<TasksIcon fill="white" />}>
          New Task
        </Button>
      </Col>
    </Grid.Container>
  );
};
