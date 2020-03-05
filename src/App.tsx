import React, { useState, useEffect } from 'react';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';

const lightTheme: DefaultTheme = {
  borderRadius: '4px',
  colors: {
    primary: ['#00759c'],
    secondary: [],
    background: ['#ffffff'],
  },
  shadows: ['0 2px 3px rgba(0, 0, 0, 0.5)'],
};

const darkTheme: DefaultTheme = {
  borderRadius: '4px',
  colors: {
    primary: ['#00759c'],
    secondary: [],
    background: ['#222222'],
  },
  shadows: ['0 2px 3px rgba(0, 0, 0, 0.5)'],
};

const Main = styled.main`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  transition: background 0.3s;
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
        </BrowserRouter>
      </Main>
    </ThemeProvider>
  );
}

export default App;
