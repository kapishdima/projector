import React from 'react';
import { AppsIcon } from '../shared/icons/AppsIcon';
import { IconProps } from '../shared/icons/icons';
import { NotificationsIcon } from '../shared/icons/NotificationsIcon';
import { StatsIcon } from '../shared/icons/StatsIcon';
import { TasksIcon } from '../shared/icons/TasksIcon';

export type Route = {
  path: string;
  label: string;
  icon: React.FC<IconProps>;
};

export const router: Route[] = [
  {
    path: '/projects',
    label: 'Projects',
    icon: AppsIcon,
  },
  {
    path: '/:id/tasks',
    label: 'Tasks',
    icon: TasksIcon,
  },
  {
    path: '/stats',
    label: 'Statictis',
    icon: StatsIcon,
  },
];
