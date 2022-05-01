import React from 'react';
import SkillsComponents from '../../Components/SkillsComponents';

import * as C from './styles';

const Skills: React.FC = () => {
  return (
      <C.Container id="skills">
          <C.Title>
            <h1>Skills</h1>
            <span></span>
          </C.Title>
          <C.ContentAreaSkills>
              <SkillsComponents/>
          </C.ContentAreaSkills>
      </C.Container>
  );
}

export default Skills;