import React, { useState } from 'react';
import { Button, Spacer, Tooltip } from '@nextui-org/react';
import { Route, router } from '../../app/routers';

type NavigationItemProps = Route & {
  isActive: boolean;
  onPressed: (path: string) => void;
};

export const AppNavigation = () => {
  const [activePath, setActivePath] = useState<string>(router[0].path);
  return (
    <>
      {router.map((route) => (
        <>
          <NavigationItem
            {...route}
            isActive={activePath === route.path}
            onPressed={setActivePath}
          />
          <Spacer y={0.5} />
        </>
      ))}
    </>
  );
};

const NavigationItem: React.FC<NavigationItemProps> = ({
  icon: Icon,
  label,
  path,
  isActive,
  onPressed,
}) => {
  return (
    <Tooltip content={label} trigger="hover" color="primary" placement="right">
      <Button
        auto
        flat={!isActive}
        icon={<Icon fill="white" />}
        onClick={() => onPressed(path)}></Button>
    </Tooltip>
  );
};
