import React from 'react';
import { Grid, Container } from '@nextui-org/react';
import { AppHeader } from './AppHeader';

export const AppLoyout = () => {
  return (
    <Grid.Container gap={2}>
      <Grid md={1}>
        <AppHeader />
      </Grid>
      <Grid md={11}>2asdasd</Grid>
    </Grid.Container>
  );
};
