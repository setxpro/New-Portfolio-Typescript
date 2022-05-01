import React from 'react';

import * as C from './styles';

interface Props {
    title: string;
    description: string;
    link: string;
    language: string;
}

const RepositoryJavascript: React.FC<Props> = ({ title, description, link , language}) => {
  return (
      <C.Container>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{language}</p>
          <a href={link}><button>Access Repository</button></a>
      </C.Container>
  );
}

export default RepositoryJavascript;