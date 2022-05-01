import React from 'react';

import * as C from './styles';

const Home: React.FC = () => {
  return (
      <C.Container id="home">
          <C.ContentLeft>
            <h1>Patrick Anjos</h1>
            <h2>Eu sou Desenvolvedor <strong>Frontend</strong></h2>
          </C.ContentLeft>
        <C.ContentRight>

        </C.ContentRight>
      </C.Container>
  );
}

export default Home;