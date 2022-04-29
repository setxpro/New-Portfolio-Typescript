import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

interface Props {
    name: string;
    link: string;
}

const Navbar: React.FC<Props> = ({name, link}) => {
  return (
    <li>
        <a href={link}>{name}</a>
    </li>
  );
}

export default Navbar;