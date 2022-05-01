import React from 'react';
import { SkillsItemsExperience } from '../SkillsItems';
import ExperienceItemsMap from './ExperienceItemsMap';

import { Container, AreaIcon } from './styles';



const SkillsExperience: React.FC = () => {
  return (
    <Container>
      <h2>Tenho Experiência</h2>
      <AreaIcon>
      {SkillsItemsExperience.map((item, index) => (
          <ExperienceItemsMap key={index} name={item.name} icon={item.icon}/>
      ))}
      </AreaIcon>
    </Container>
  );
}

export default SkillsExperience;