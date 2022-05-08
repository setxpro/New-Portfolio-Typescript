import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

interface Props {
    toggleTheme: () => void;
}

const SwitchNavbar: React.FC<Props> = ({toggleTheme}) => {

    const { colors, title } = useContext(ThemeContext);

  return (
    <Switch
    onChange={toggleTheme}
    checked={title === 'dark'}
    checkedIcon={false}
    uncheckedIcon={false}
    height={10}
    width={40}
    handleDiameter={20}
    offColor={ colors.icons }
    onColor={ colors.icons }
  />
  );
}

export default SwitchNavbar;