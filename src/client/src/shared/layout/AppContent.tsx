import React from 'react';
import { Button, Card, Col, Container, Grid, Input, Row, Spacer, Text } from '@nextui-org/react';
import { PlusIcon } from '../icons/PlusIcon';
import { SearchIcon } from '../icons/SearchIcon';
import { FloatingCreateButton } from '../buttons/FloatingCreateButton';

export const AppContent = () => {
  return (
    <Grid.Container>
      <Col css={{ paddingLeft: '$10' }}>
        <Row align="center">
          <Text h2 size={28}>
            My Projects
          </Text>
          <Grid xs={3} justify="center" alignItems="center">
            <Button auto light size={'sm'} css={{ fontWeight: 'bold' }}>
              All (10)
            </Button>
            <Button auto light size={'sm'} css={{ fontWeight: 'bold' }}>
              Completed{' '}
            </Button>
          </Grid>
          <Grid xs={4} justify="center" alignItems="center">
            <Input
              clearable
              fullWidth
              contentRightStyling={false}
              placeholder="Search by system..."
              contentRight={
                <Button auto light>
                  <SearchIcon fill="white" />
                </Button>
              }
            />
          </Grid>
        </Row>
      </Col>

      <FloatingCreateButton />
    </Grid.Container>
  );
};
