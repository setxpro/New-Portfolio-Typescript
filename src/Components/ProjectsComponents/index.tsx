import React from 'react';

import * as C from './styles';

import Netflix from '../../img/netflix.jpg';

interface Props {
  title: string;
  description: string;
  img: string;
  language: string;
  link: string;
}

const ProjectsComponents: React.FC<Props> = ({ title, description, img, language, link }) => {
  return (
    <C.Container>
      <img src={img} alt="img"/>
      <h2>{title}</h2>
      <h4>{language}</h4>
      <p>{description}</p>
      <a href={link}><button>Deploy</button></a>
    </C.Container>
  );
}

export default ProjectsComponents;
