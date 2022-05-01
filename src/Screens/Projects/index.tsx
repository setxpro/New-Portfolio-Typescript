import React from 'react';
import ProjectsComponents from '../../Components/ProjectsComponents';
import { reposDeploy } from '../../Components/ProjectsComponents/ProjectItems';

import * as C from './styles';

const Projects: React.FC = () => {
  return (
      <C.Container id="projects">
          <C.Title>
          <h1>Projects</h1>
                <span></span>
              </C.Title>
              <C.Content>
                {reposDeploy.map((item, index) => (
                  <ProjectsComponents
                    key={index}
                    title={item.title}
                    description={item.description}
                    img={item.img}
                    language={item.language}
                    link={item.link}
                  />
                ))}
                
              </C.Content>
      </C.Container>
  );
}

export default Projects;