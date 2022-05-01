import React from 'react';

import { Container, Content, Facebook, Github, Gmail, Instagram, Linkedin, Location, Wapp } from './styles';

const InfoToContact: React.FC = () => {
  return (
    <Container>
        <Content>
          <Gmail/>
          <h4><a href='mailto:developerseven77@gmail.com'>Email</a></h4>
        </Content>
        <Content>
          <Instagram/>
          <h4><a href="https://www.instagram.com/patrick_anjos_rocha/" target="_blank" rel="noreferrer">Instagram</a></h4>
        </Content>
        <Content>
          <Facebook/>
          <h4><a href='https://www.facebook.com/patrick.anjos.r' target="_blank" rel="noreferrer">Facebook</a></h4>
        </Content>
        <Content>
        <Wapp/>
          <h4><a href="https://contate.me/developerseven7" target="_blank" rel="noreferrer">21 96607-7757</a></h4>
        </Content>
        <Content>
          <Linkedin/>
          <h4><a href="https://www.linkedin.com/in/patrick-anjos-8b65021b7/" target="_blank" rel="noreferrer">Linkedin</a></h4>
        </Content>
        <Content>
          <Github/>
          <h4><a href="https://github.com/setxpro" target="_blank" rel="noreferrer">Github</a></h4>
        </Content>
        <Content>
          <Location/>
          <h4>
          <a href="https://www.google.com.br/maps/place/Arte+dos+sonhos/@-22.9305842,-43.5598782,17z/data=!3m1!4b1!4m5!3m4!1s0x9be715695e5a8d:0x6dba1945d92b308b!8m2!3d-22.9305811!4d-43.5576878" target="_blank" rel="noreferrer">
            Google Maps</a>
          </h4>
          </Content>
          <Content>
          <strong>Residencial</strong>
          <span></span>
          <h4>21 3484-5929</h4>
        </Content>
          <Content>
          <strong>Endereço</strong>
          <span></span>
          <h4>Brasil, Rio de Janeiro - RJ - Campo Grande. 23042-420</h4>
        </Content>
    </Container>
  );
}

export default InfoToContact;