import React from 'react';
import { Grid, Container } from '@nextui-org/react';
import { AppHeader } from './AppHeader';
import { AppContent } from './AppContent';

export const AppLoyout = () => {
  return (
    <Grid.Container gap={2}>
      <Grid md={1}>
        <AppHeader />
      </Grid>
      <Grid md={11}>
        <AppContent />
      </Grid>
    </Grid.Container>
  );
};
