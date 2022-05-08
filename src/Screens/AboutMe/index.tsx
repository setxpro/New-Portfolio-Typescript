import React from 'react';
import AboutContent from '../../Components/AboutComponents/AboutContent';
import { AboutItems, MoreInfo } from '../../Components/AboutComponents/AboutItems';
import Layout from '../../Components/Layout';

import * as C from './styles';

const About: React.FC = () => {
  return (
      <Layout>
      <C.Container id="about">
              <C.Title>
                <h1>About me</h1>
                <span></span>
              </C.Title>
              {AboutItems.map((item, index) => (
                      <AboutContent
                      key={index}
                      title={item.title}
                      aboutMe={item.aboutMe}
                      image={item.image}
                      linkCv={item.linkCv}
                      linkGithub={item.linkGithub}
                    />
              ))}
      </C.Container>
      </Layout>
  );
}

export default About;