import React from 'react';
import { TypescriptIcon } from '../../../../styles/icons/icons';

// import { Container } from './styles';

interface Props {
    name: string;
    icon: JSX.Element;
}

const ExperienceItemsMap: React.FC<Props> = ({name, icon}) => {
  return(
    <div>
        {icon}
        <p>{name}</p>
    </div>
  );
}

export default ExperienceItemsMap;