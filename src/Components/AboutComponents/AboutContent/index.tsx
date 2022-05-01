import React from 'react';
import { MoreInfo } from '../AboutItems';
import AboutRightSide from '../AboutRightSide';

import * as C from './styles';

interface Props {
  title: string;
  aboutMe: string;
  image: string;
  linkCv: string;
  linkGithub: string;
}

const AboutContent: React.FC<Props> = ({title, aboutMe, image, linkCv, linkGithub }) => {
  return (
      <C.Container>
          <C.ContentLeft>
          <h2>{title}</h2>
              <p>{aboutMe}</p>
              <C.ContentBottomIcon>
                <C.ReactIcon/>
            </C.ContentBottomIcon>
          </C.ContentLeft>
          <C.ContentRight>
       <h2>Informações Adicionais</h2>
          <C.ContentAreaMoreInfo>
              {MoreInfo.map((item, index) => (
                <AboutRightSide
                  key={index}
                  resum={item.resum}
                />
              ))}
         </C.ContentAreaMoreInfo>
          <C.Buttons>
          <button>Download CV</button>
          <button>Github</button>
      </C.Buttons>
    </C.ContentRight>
      </C.Container>
  );
}

export default AboutContent;