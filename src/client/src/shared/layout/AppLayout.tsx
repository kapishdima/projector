import React, { PropsWithChildren } from 'react';
import { Grid, Spacer } from '@nextui-org/react';
import { AppNavigation } from './AppNavigation';

export const AppLoyout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid.Container css={{ position: 'relative' }}>
      <AppNavigation />
      <Spacer y={2} />
      <Grid.Container css={{ paddingLeft: '24px', paddingRight: '24px' }}>
        {children}
      </Grid.Container>
    </Grid.Container>
  );
};
