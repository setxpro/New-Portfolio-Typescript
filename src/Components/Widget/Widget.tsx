import React from 'react';

import { Chat, Button, Container } from './styles';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm/WidgetForm';

const Widget: React.FC = () => {
  return (
    <Container>
        <Popover.Panel>
          <WidgetForm/>
        </Popover.Panel>
          <Button>
                <Chat/>
                <span>Feedback</span>
          </Button>
    </Container>
  );
}

export default Widget;