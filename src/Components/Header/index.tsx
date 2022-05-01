import React, { useState } from 'react';
import Navbar from './Navbar';
import { navbarItems } from './NavbarItems';



import * as C from './styles';
import SwitchNavbar from './Switch';

interface Props {
    toggleTheme: () => void;
    disappearHeader: boolean;
}

const Header: React.FC<Props> = ({ toggleTheme, disappearHeader}) => {

    const [openMenu, setOpenMenu] = useState(false);

    const wrapperMenu = () => setOpenMenu(!openMenu);

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
          <C.MenuMobileArea>
          <C.Bars onClick={wrapperMenu}/>
                    <C.NavMobile openMenu={openMenu}>
                    
                    <ul>
                        {navbarItems.map((item, index) => (
                                <Navbar
                                    key={index}
                                    name={item.name}
                                    link={item.link}
                                />
                            ))}
                    </ul>
                </C.NavMobile>
          </C.MenuMobileArea>

          <SwitchNavbar toggleTheme={toggleTheme}/>
      </C.Container>
  );
}

export default Header;