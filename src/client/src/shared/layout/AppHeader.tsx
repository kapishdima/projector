import React from 'react';
import { Card, Col, Spacer } from '@nextui-org/react';

import { AppNavigation } from './AppNavigation';
import { NotificationButton } from '../buttons/NotificationButton';

export const AppHeader = () => {
  return (
    <Card style={{ minHeight: '96vh', alignItems: 'center' }}>
      <Card.Header css={{ width: 'auto' }}>
        <Col css={{ textAlign: 'center' }}>
          <img
            alt="nextui logo"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width="34px"
            height="34px"
          />
        </Col>
      </Card.Header>

      <Card.Body>
        <AppNavigation />
      </Card.Body>
      <Card.Footer css={{ width: 'auto' }}>
        <NotificationButton />
      </Card.Footer>
    </Card>
  );
};
