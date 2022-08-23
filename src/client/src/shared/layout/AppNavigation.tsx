import React from 'react';
import { Button, Spacer, Tooltip } from '@nextui-org/react';
import { Route, router } from '../../app/routers';

export const AppNavigation = () => {
  return (
    <>
      {router.map((route) => (
        <>
          <NavigationItem {...route} />
          <Spacer y={0.5} />
        </>
      ))}
    </>
  );
};

const NavigationItem: React.FC<Route> = ({ icon: Icon, label, path }) => {
  return (
    <Tooltip content={label} trigger="hover" color="primary" placement="right">
      <Button auto flat icon={<Icon fill="white" />}></Button>
    </Tooltip>
  );
};
