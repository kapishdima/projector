import React, { useState } from 'react';
import { Button, Grid, Row, Spacer, Text } from '@nextui-org/react';
import { MarkActivityModal } from './MarkActivityModal';

type MarkActivityPopoverProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

export const MarkActivityPopover: React.FC<MarkActivityPopoverProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <Grid.Container css={{ p: '$4', maxW: '180px' }}>
      <Text b size={14}>
        Did you work that day?
      </Text>
      <Spacer y={0.5} />
      <Row>
        <Button auto size="xs" color="error" onClick={onCancel}>
          No
        </Button>
        <Spacer x={0.5} />
        <Button auto size="xs" onClick={onConfirm}>
          Yes
        </Button>
      </Row>
    </Grid.Container>
  );
};
