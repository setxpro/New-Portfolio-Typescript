import React from 'react';
import { SkillsIHaveInterestedDB } from '../SkillsItems';
import InterestedMap from './InterestedMap';

import { Container, AreaIcon } from './styles';

const SkillsIHaveInterested: React.FC = () => {
  return (
    <Container>
      <h2>Tenho Interesse</h2>
      <AreaIcon>
        {SkillsIHaveInterestedDB.map((item, index) => (
            <InterestedMap
              key={index}
              name={item.name}
              icon={item.icon}
            />
        ))}
      </AreaIcon>
    </Container>
  );
}

export default SkillsIHaveInterested;