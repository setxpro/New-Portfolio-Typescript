import React from 'react';

import { Container } from './styles';

interface Props {
  toggleReposJs: () => void;
  toggleReposTs: () => void;
  javascriptRepos: boolean;
  typescriptRepos: boolean;
}

const RepositoryNavArea: React.FC<Props> = ({ toggleReposJs, toggleReposTs, javascriptRepos, typescriptRepos }) => {
  return (
      <Container>
          <button onClick={toggleReposJs} className={javascriptRepos === true ? 'active' : ''}>Javascript</button>
          <button onClick={toggleReposTs} className={typescriptRepos === true ? 'active' : ''}>Typescript</button>
      </Container>
  );
}

export default RepositoryNavArea;