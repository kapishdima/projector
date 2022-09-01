import React from 'react';
import { Badge, Button, Card, Col, Grid, Row, Spacer, Text } from '@nextui-org/react';
import { AppLoyout } from '../../../shared/layout/AppLayout';
import { ProjectActivityCard } from './ProjectActivityCard';
import { AlarmIcon } from '../../../shared/icons/AlarmIcon';
import { StatsIcon } from '../../../shared/icons/StatsIcon';
import { TrashIcon } from '../../../shared/icons/TrashIcon';
import { EditIcon } from '../../../shared/icons/EditIcon';
import { TasksIcon } from '../../../shared/icons/TasksIcon';
import { CalendarIcon } from '../../../shared/icons/CalendarIcon';

{
  /* <div style={{ display: 'flex', alignItems: 'center', columnGap: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <StatsIcon width={12} fill="#697177" />
              <Spacer x={0.2} />
              <Text color="#697177" b size={12}>
                Tasks: 12/50
              </Text>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AlarmIcon width={12} fill="#697177" />
              <Spacer x={0.2} />
              <Text color="#697177" b size={12}>
                Deadline: 26.05.2022
              </Text>
              <Spacer x={0.1} />
              <Text color="$red600" b size={12}>
                ({26} days)
              </Text>
            </div>
          </div> */
}

export const ProjectShow: React.FC = () => {
  return (
    <AppLoyout>
      <Grid xs={9} direction="column" css={{ paddingLeft: '22px', paddingRight: '22px' }}>
        <Badge isSquared color="primary">
          In Progress
        </Badge>
        <Spacer y={0.8} />
        <Text size={28} b css={{ display: 'block' }}>
          React admin panel
        </Text>
        <Spacer y={0.3} />
        <Text size={14} color="$gray600" b css={{ maxW: '80%' }}>
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising
          pain was born and I will give you a complete account of the system, and expound the actual
          teachings of the great explorer of the truth, the master-builder of human happiness. No
          one rejects, dislikes,
        </Text>
        <Spacer y={1} />
        <Row css={{ columnGap: '$6' }}>
          <Grid direction="column" xs={2}>
            <Row align="center">
              <TasksIcon fill="#787F85" />
              <Spacer x={0.2} />
              <Text b color="$gray700" size={14} css={{ display: 'block' }}>
                Task
              </Text>
            </Row>
            <Row align="center">
              <Text b size={24} css={{ display: 'block' }}>
                50
              </Text>
              <Spacer x={0.2} />
              <Text b size={14} color="$blue700" css={{ display: 'block' }}>
                (56%)
              </Text>
            </Row>
          </Grid>
          <Grid xs={2.5} direction="column">
            <Row align="center">
              <AlarmIcon fill="#787F85" />
              <Spacer x={0.2} />
              <Text b color="$gray700" size={14} css={{ display: 'block' }}>
                Deadline
              </Text>
            </Row>
            <Text b size={24} css={{ display: 'block' }}>
              25.06.2022
            </Text>
          </Grid>
          <Grid xs={2} direction="column">
            <Row align="center">
              <CalendarIcon fill="#787F85" />
              <Spacer x={0.2} />
              <Text b color="$gray700" size={14} css={{ display: 'block' }}>
                Activity record
              </Text>
            </Row>
            <Text b size={24} css={{ display: 'block' }}>
              12 days in row
            </Text>
          </Grid>
        </Row>
      </Grid>
      <ProjectActivityCard />
    </AppLoyout>
  );
};
