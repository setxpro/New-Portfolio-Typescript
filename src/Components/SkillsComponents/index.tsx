import React from 'react';
import SkillsExperience from './SkillsExperience';
import SkillsIntermediary from './SkillsIntermediary';
import  SkillsIHaveInterested  from './SkillsIHaveInterested';

import * as C from './styles';


const SkillsComponents: React.FC = () => {
  return (
    <C.Container>
      <SkillsExperience/>
      <SkillsIntermediary/>
      <SkillsIHaveInterested/>
    </C.Container>
  );
}

export default SkillsComponents;