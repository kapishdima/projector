import React from 'react';
import { Grid, Card, Row, Button, Text, Spacer } from '@nextui-org/react';
import { ActivityCalendar } from '../../activity/ui/ActivityCalendar';

export const ProjectActivityCard: React.FC = () => {
  return (
    <Grid
      xs={3}
      justify="flex-end"
      css={{ position: 'sticky', top: '10px', minH: '65vh', maxH: '65vh' }}>
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
  );
};
