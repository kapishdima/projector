import React from 'react';

import { Button, Card, Col, Grid, Row, Spacer, Text } from '@nextui-org/react';
import { ProjectCard } from '../../modules/project/ui/ProjectCard';
import { AppLoyout } from '../../shared/layout/AppLayout';
import { ProjectDomainEntity } from '../../modules/project/entities/project.domain';
import { AngleLeftIcon } from '../../shared/icons/AngleLeftIcon';
import { AngleRightIcon } from '../../shared/icons/AngleRightIcon';
import { ActivityCalendar } from '../../modules/activity/ui/ActivityCalendar';

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
      <Grid xs={9} css={{ gap: '$8', flexWrap: 'wrap' }}>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </Grid>
      <Grid xs={3} css={{ position: 'sticky', top: '10px', maxH: '60%' }}>
        <Card variant="shadow" css={{ p: '$10' }}>
          <Card.Header>
            <Grid>
              <Row align="center" justify="space-between">
                <Text b size={14}>
                  Work activity
                </Text>
                <Button flat auto size="xs">
                  Full statistics
                </Button>
              </Row>
              <Spacer y={0.5} />
              <Text size={12} color="$gray400" css={{ lh: '$md', fontWeight: 'bold' }}>
                This calendar shows the days in which the work on the projects was going on
              </Text>
            </Grid>
          </Card.Header>
          <Card.Body>
            <ActivityCalendar />
          </Card.Body>
        </Card>
      </Grid>
    </AppLoyout>
  );
};
