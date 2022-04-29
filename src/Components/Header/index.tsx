import React from 'react';
import Navbar from './Navbar';
import { navbarItems } from './NavbarItems';



import * as C from './styles';
import SwitchNavbar from './Switch';

interface Props {
    toggleTheme: () => void;
    disappearHeader: boolean;
}

const Header: React.FC<Props> = ({ toggleTheme, disappearHeader}) => {

  return (
      <C.Container disappearHeader={disappearHeader}>
          <C.Nav>
              <ul>
                  {navbarItems.map((item, index) => (
                        <Navbar
                            key={index}
                            name={item.name}
                            link={item.link}
                        />
                    ))}
              </ul>
          </C.Nav>
          <SwitchNavbar toggleTheme={toggleTheme}/>
      </C.Container>
  );
}

export default Header;