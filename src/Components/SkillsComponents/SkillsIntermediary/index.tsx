import React from 'react';
import { SkilsItemsIntermediaryDB } from '../SkillsItems';
import IntermediaryMap from './IntermediaryMap';

import { Container, AreaIcon } from './styles';

interface Props {
  name: string;
  icon: JSX.Element;
}
const SkillsIntermediary: React.FC = () => {
  return (
    <Container>
    <h2>Estou estudando</h2>
      <AreaIcon>
          {SkilsItemsIntermediaryDB.map((item, index) => (
            <IntermediaryMap key={index} name={item.name} icon={item.icon}/>
          ))}  
      </AreaIcon>
  </Container>
  );
}

export default SkillsIntermediary;