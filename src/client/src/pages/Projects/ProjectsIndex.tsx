import React from 'react';

import { Card, Grid } from '@nextui-org/react';
import { ProjectCard } from '../../modules/project/ui/ProjectCard';
import { AppLoyout } from '../../shared/layout/AppLayout';
import { ProjectDomainEntity } from '../../modules/project/entities/project.domain';

const projects: ProjectDomainEntity[] = [
  {
    name: 'React Admin Panel',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    completed: true,
    expirationDate: new Date('July 20, 2022 03:24:00'),
  },
  {
    name: 'React Admin Panel',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    completed: true,
    expirationDate: new Date('July 20, 2022 03:24:00'),
  },
  {
    name: 'React Admin Panel',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    completed: false,
    expirationDate: new Date('July 20, 2022 03:24:00'),
  },
  {
    name: 'React Admin Panel',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    completed: false,
    expirationDate: new Date('July 20, 2022 03:24:00'),
  },
];

export const ProjectsIndex: React.FC = () => {
  return (
    <AppLoyout>
      <Grid xs={9} css={{ gap: '$4', flexWrap: 'wrap' }}>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </Grid>
      <Grid xs={3}>
        <Card variant="shadow">Date</Card>
      </Grid>
    </AppLoyout>
  );
};
