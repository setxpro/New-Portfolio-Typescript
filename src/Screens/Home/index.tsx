import React from 'react';

import * as C from './styles';

const Home: React.FC = () => {
  return (
      <C.Container id="home">
          <C.ContentLeft>
            <h3>Olá, meu nome é</h3>
            <h1>Patrick Anjos</h1>
            <h2>Desenvolvedor <strong>Frontend</strong></h2>
          </C.ContentLeft>
        <C.ContentRight>

        </C.ContentRight>
      </C.Container>
  );
}

export default Home;