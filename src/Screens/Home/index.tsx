import React from 'react';
import Layout from '../../Components/Layout';

import * as C from './styles';

const Home: React.FC = () => {
  return (
    <Layout>
      <C.Container id="home">
          <C.ContentLeft>
            <h1>Patrick Anjos</h1>
            <h2>Eu sou Desenvolvedor <strong>Frontend</strong></h2>
          </C.ContentLeft>
      </C.Container>
    </Layout>
  );
}

export default Home;