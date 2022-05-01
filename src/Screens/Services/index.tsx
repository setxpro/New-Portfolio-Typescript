import React from 'react';
import ServicesComponents from '../../Components/ServicesComponents';
import { ServicesItems } from '../../Components/ServicesComponents/ServicesItems';

import * as C from './styles';

const Services: React.FC = () => {
  return (
      <C.Container id="services">
         <C.Title>
         <h1>Services</h1>
                <span></span>
              </C.Title>
              <C.ContentArea>
                {ServicesItems.map((item, index) => (
                    <ServicesComponents
                      key={index}
                      title={item.title}
                      icon={item.icon}
                      description={item.description}
                    />
                ))}
                  
              </C.ContentArea>
      </C.Container>
  );
}

export default Services;