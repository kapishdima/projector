import React from 'react';

import { format, differenceInDays } from 'date-fns';
import { Button, Card, Grid, Row, Spacer, Text } from '@nextui-org/react';

import { AlarmIcon } from '../../../shared/icons/AlarmIcon';
import { EditIcon } from '../../../shared/icons/EditIcon';
import { StatsIcon } from '../../../shared/icons/StatsIcon';
import { TrashIcon } from '../../../shared/icons/TrashIcon';
import { ProjectDomainEntity } from '../entities/project.domain';
import { ProjectStatusBadge } from './ProjectStatusBadge';

type ProjectCardProps = {
  project: ProjectDomainEntity;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { name, description, completed, expirationDate } = project;
  const formatedExpirationDate = format(expirationDate, 'dd.MM.yyyy');
  const daysLeft = differenceInDays(new Date(), expirationDate);

  return (
    <Grid xs={3.8}>
      <Card isHoverable isPressable variant="shadow" css={{ p: '$1' }} color="primary">
        <Card.Header css={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <ProjectStatusBadge completed={completed} />
          <Spacer y={0.6} />
          <Text b size={14}>
            {name}
          </Text>
          <Spacer y={0.1} />
          <Text b size={12} color="$gray600">
            {description}
          </Text>
        </Card.Header>
        <Card.Body>
          <Row align="center">
            <AlarmIcon width={12} fill="#697177" />
            <Spacer x={0.2} />
            <Text color="#697177" b size={12}>
              Deadline: {formatedExpirationDate}
            </Text>
            <Spacer x={0.1} />
            <Text color="$red600" b size={12}>
              ({daysLeft} days)
            </Text>
          </Row>
          <Row align="center">
            <StatsIcon width={12} fill="#697177" />
            <Spacer x={0.2} />
            <Text color="#697177" b size={12}>
              Tasks: 12/50
            </Text>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row justify="space-around">
            <Button flat auto size="xs" color="primary">
              More details
            </Button>
            <Spacer x={5} />
            <Row>
              <Button auto light size="xs">
                <EditIcon width={12} fill="white" />
              </Button>
              <Spacer x={0.2} />
              <Button auto light size="xs" color="error">
                <TrashIcon width={12} fill="#910838" />
              </Button>
            </Row>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
