import React from 'react';
import FormEmailJs from '../../Components/ContactComponent/FormEmailJs';
import InfoToContact from '../../Components/ContactComponent/InfoToContact';
import Layout from '../../Components/Layout';

import * as C from './styles';

const Contact: React.FC = () => {
  return (
    <Layout>
      <C.Container id="contact">
          <C.Title>
          <h1>Contact</h1>
                <span></span>
              </C.Title>
              <C.ContentAreaContact>
                  <C.ContentLeft>
                    <InfoToContact/>
                  </C.ContentLeft>
                  <C.ContentRight>
                    <C.AreaTitle><h2> Shall we have a coffee ?</h2></C.AreaTitle>
                      <FormEmailJs/>
                  </C.ContentRight>
              </C.ContentAreaContact>
      </C.Container>
      </Layout>
  );
}

export default Contact;