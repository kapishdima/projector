import React from 'react';
import {
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Text,
  Col,
  Grid,
  Spacer,
  Textarea,
  Dropdown,
} from '@nextui-org/react';

type MarkActivityModalProps = {
  isShown: boolean;
  onClose: () => void;
};

export const MarkActivityModal: React.FC<MarkActivityModalProps> = ({ isShown, onClose }) => {
  const [selected, setSelected] = React.useState<Set<any>>(new Set(['Select task']));

  const selectedValue = React.useMemo(() => Array.from(selected).join(', '), [selected]);

  return (
    <Modal closeButton blur open={isShown} onClose={onClose} width="40%">
      <Modal.Header>
        <Grid.Container>
          <Grid direction="column" alignItems="flex-start">
            <Text b size={16} css={{ display: 'block', textAlign: 'left' }}>
              Mark activity
            </Text>
            <Spacer y={0.2} />
            <Text b size={14} css={{ display: 'block' }} color="$gray600">
              Talk about what has been done
            </Text>
          </Grid>
        </Grid.Container>
      </Modal.Header>
      <Modal.Body>
        <Textarea label="What was done?" placeholder="Briefly describe what was done" bordered />
        <Text b size={14}>
          Select the tasks you want to mark completed (optional)
        </Text>
        <Dropdown>
          <Dropdown.Button auto flat css={{ tt: 'capitalize' }}>
            {selectedValue}
          </Dropdown.Button>
          <Dropdown.Menu
            aria-label="Single selection actions"
            color="primary"
            disallowEmptySelection
            selectionMode="multiple"
            selectedKeys={selected}
            onSelectionChange={(value: any) => setSelected(value)}>
            <Dropdown.Item key="text">Text</Dropdown.Item>
            <Dropdown.Item key="number">Number</Dropdown.Item>
            <Dropdown.Item key="date">Date</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Modal.Body>
      <Modal.Footer>
        <Row justify="flex-end">
          <Button auto light color="error" size="sm">
            Cancel
          </Button>
          <Spacer x={0.5} />
          <Button auto size="sm">
            Confirm
          </Button>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};
