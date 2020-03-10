import React, { useState, useEffect } from 'react';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Gallery from './routes/Gallery';

const lightTheme: DefaultTheme = {
  borderRadius: '4px',
  colors: {
    primary: ['#00759c'],
    secondary: [],
    background: ['#ffffff', '#ffffff'],
    text: '#111111',
  },
  shadows: ['0 2px 3px rgba(0, 0, 0, 0.5)'],
  transitions: ['0.3s'],
};

const darkTheme: DefaultTheme = {
  borderRadius: '4px',
  colors: {
    primary: ['#00759c'],
    secondary: [],
    background: ['#222222', '#323232'],
    text: '#ffffff',
  },
  shadows: ['0 2px 3px rgba(0, 0, 0, 0.5)'],
  transitions: ['0.3s'],
};

const Main = styled.main`
  min-height: 100vh;
  background: ${props => props.theme.colors.background[0]};
  transition: background ${props => props.theme.transitions[0]};
`;

export type ThemeType = 'dark' | 'light';

const fromLocalStorage = localStorage.getItem('themeType');

function App() {
  const [themeType, setThemeType] = useState<ThemeType>(
    (fromLocalStorage as ThemeType) ?? 'dark'
  );

  useEffect(() => {
    localStorage.setItem('themeType', themeType);
  }, [themeType]);

  return (
    <ThemeProvider theme={themeType === 'dark' ? darkTheme : lightTheme}>
      <Main>
        <BrowserRouter>
          <NavBar setThemeType={setThemeType} themeType={themeType} />
          <Route path="/">Home</Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </BrowserRouter>
      </Main>
    </ThemeProvider>
  );
}

export default App;
