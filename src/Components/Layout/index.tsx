import React from 'react';

import { Container } from './styles';

interface ChildrenProps {
  children: JSX.Element;
}

const Layout: React.FC<ChildrenProps> = ({children}) => <Container>{children}</Container>

export default Layout;