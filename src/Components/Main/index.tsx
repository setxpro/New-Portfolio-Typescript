import React from 'react';
import About from '../../Screens/AboutMe';
import Contact from '../../Screens/Contact';
import Home from '../../Screens/Home';
import Projects from '../../Screens/Projects';
import Repositories from '../../Screens/Repositories';
import Services from '../../Screens/Services';
import Skills from '../../Screens/Skills';
import Layout from '../Layout';

import * as C from './styles';



const Main: React.FC = () => {
  return (
    <Layout>
      <C.Container>
          <Home/>
          <About/>
          <Skills/>
          <Services/>
          <Projects/>
          <Repositories/>
          <Contact/>
      </C.Container>
    </Layout>
  );
}

export default Main;