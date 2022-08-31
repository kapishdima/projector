import React, { useState } from 'react';
import { Button, Dropdown, Input, Navbar, Spacer, Tooltip, Text } from '@nextui-org/react';
import { Route, router } from '../../app/routers';
import { AppsIcon } from '../icons/AppsIcon';
import { PlusIcon } from '../icons/PlusIcon';
import { SearchIcon } from '../icons/SearchIcon';
import { StatsIcon } from '../icons/StatsIcon';
import { TasksIcon } from '../icons/TasksIcon';

export const AppNavigation = () => {
  const [activePath, setActivePath] = useState<string>(router[0].path);

  return (
    <Navbar isBordered css={{ justifyContent: 'space-between' }}>
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          PROJECTOR
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link href="#">
          <AppsIcon fill="white" width={14} /> <Spacer x={0.5} />{' '}
          <Text size={14} b>
            Projects
          </Text>
        </Navbar.Link>
        <Navbar.Link href="#">
          <StatsIcon fill="white" width={14} /> <Spacer x={0.5} />{' '}
          <Text size={14} b>
            Statiscs
          </Text>
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item
          css={{
            minWidth: '400px',
          }}>
          <Input
            fullWidth
            contentLeft={<SearchIcon fill="var(--nextui-colors-accents6)" width={14} />}
            css={{
              w: '100%',
              '@xsMax': {
                mw: '300px',
              },
              '& .nextui-input-content--left': {
                h: '100%',
                ml: '$4',
                dflex: 'center',
              },
            }}
            placeholder="Search..."
          />
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Content>
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Button flat auto size="sm" iconRight={<PlusIcon width={12} fill="#0072F5" />}>
                <Text size={14} b color="$primary">
                  Create
                </Text>
              </Button>
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="Create menu actions"
            onAction={(actionKey) => console.log({ actionKey })}>
            <Dropdown.Item key="project" icon={<AppsIcon fill="white" />}>
              <Text size={14} b>
                Project
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="task" icon={<TasksIcon fill="white" />}>
              <Text size={14} b>
                Task
              </Text>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
    </Navbar>
  );
};
