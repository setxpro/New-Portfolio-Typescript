import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

interface Props {
    name: string;
    link: string;
}

const Navbar: React.FC<Props> = ({name, link}) => {
  return (
    <a href={link}>
    <li className='active'>
        {name}
    </li>
    </a>
  );
}

export default Navbar;