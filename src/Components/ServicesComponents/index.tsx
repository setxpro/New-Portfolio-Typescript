import React from 'react';

import * as C from './styles';

interface Props {
  title: string;
  icon: JSX.Element;
  description: string;
}

const ServicesComponents: React.FC<Props> = ({title, icon, description}) => {
  return (
      <C.Container>
        {icon}
          <h2>{title}</h2>
          <p>{description}</p>
      </C.Container>
  );
}

export default ServicesComponents;