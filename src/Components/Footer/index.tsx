import React from 'react';

import * as C from './styles';

const Footer: React.FC = () => {
  return (
      <C.Container>
        <ul>
          <li>Created with 🤍</li>
          <li>by Patrick Anjos</li>
          <li>© 2022</li>
        </ul>
      </C.Container>
  );
}

export default Footer;