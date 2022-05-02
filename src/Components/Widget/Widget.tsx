import React from 'react';

import { Chat, Button, Container } from './styles';
import { Popover } from '@headlessui/react'

const Widget: React.FC = () => {
  return (
    <Container>
        <Popover.Panel>Hello World</Popover.Panel>
          <Button>
                <Chat/>
                <span>Feedback</span>
          </Button>
    </Container>
  );
}

export default Widget;