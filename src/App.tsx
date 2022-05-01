import React, { useState, useEffect } from 'react';

import usePersistedState from './utils/usePersistedState';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/theme/light';
import dark from './styles/theme/dark';
import Header from './Components/Header';
import Main from './Components/Main';
import ArrowTop from './utils/ArrowTop';
import { Container } from './styles/AppStyle';
import Footer from './Components/Footer';

const App: React.FC = () => {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme',light);
  const [disappearHeader, setDisappearHeader] = useState(false);

  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 2) {
        setDisappearHeader(true);
      }
      else {
        setDisappearHeader(false);
      }  
    }
    window.addEventListener('scroll', scrollListener);

    return () => { window.removeEventListener('scroll', scrollListener) }
  }, []);

  return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header toggleTheme={toggleTheme} disappearHeader={disappearHeader}/>
          <Main/>
          <ArrowTop disappearHeader={disappearHeader}/>
          <Footer/>
        </Container>
      </ThemeProvider>
  );
}

export default App;