import React, { useState } from 'react';

import { Popover, Button } from '@nextui-org/react';

import { MarkActivityPopover } from './MarkActivityPopover';
import { MarkActivityModal } from './MarkActivityModal';

type ActivityCalendarDayProps = {
  isActivity: boolean;
  isSameMonth: boolean;
  day: Date;
};

const colors: Array<'success' | 'primary'> = ['primary', 'success'];

export const ActivityCalendarDay: React.FC<ActivityCalendarDayProps> = ({
  isActivity,
  isSameMonth,
  day,
}) => {
  const [isShownPopover, setIsShownPopover] = useState(false);
  const [isShownModal, setIsShownModal] = useState(false);

  const closeModal = () => {
    setIsShownModal(false);
  };

  const onConfirm = () => {
    setIsShownModal(true);
    setIsShownPopover(false);
  };

  const onCancel = () => {
    setIsShownPopover(false);
  };

  return (
    <>
      <Popover isOpen={isShownPopover} onOpenChange={setIsShownPopover}>
        <Popover.Trigger>
          <Button
            auto
            flat={!isActivity}
            disabled={!isSameMonth}
            color={colors[+isActivity]}
            size="xs"
            css={{ minWidth: '35px', maxWidth: '35px', minHeight: '35px', maxHeight: '35px' }}>
            {day.getDate()}
          </Button>
        </Popover.Trigger>
        <Popover.Content>
          <MarkActivityPopover onConfirm={onConfirm} onCancel={onCancel} />
        </Popover.Content>
      </Popover>
      <MarkActivityModal isShown={isShownModal} onClose={closeModal} />
    </>
  );
};
