import React from 'react';
import * as C from './styles';


const CloseButton: React.FC = () => {
  return (
      <C.ButtonCloseArea>
          <C.CloseButtonIcon />
      </C.ButtonCloseArea>
  );
}

export default CloseButton;