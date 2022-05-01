import React from 'react';
import SkillsComponents from '../../Components/SkillsComponents';
import Layout from '../../Components/Layout';
import * as C from './styles';

const Skills: React.FC = () => {
  return (
    <Layout>
      <C.Container id="skills">
          <C.Title>
            <h1>Skills</h1>
            <span></span>
          </C.Title>
          <C.ContentAreaSkills>
              <SkillsComponents/>
          </C.ContentAreaSkills>
      </C.Container>
    </Layout>
  );
}

export default Skills;