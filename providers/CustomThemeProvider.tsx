import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

type ThemeType = 'dark' | 'light';

type ContextState = {
  themeType: ThemeType;
  setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>;
};

export const CustomThemeContext = React.createContext<ContextState>({
  themeType: 'light',
  setThemeType: () => {},
});

const darkTheme: DefaultTheme = {
  borderRadius: '4px',
  colors: {
    primary: ['#007bff'],
    secondary: [''],
    background: {
      main: ['#232323', '#292929'],
      inverse: ['#ffffff'],
    },
    foreground: '#ffffff',
  },
  shadows: ['0 2px 3px rgba(0, 0, 0, 0.5)', '0 5px 15px rgba(0, 0, 0, 0.3)'],
};

const lightTheme: DefaultTheme = {
  borderRadius: '4px',
  colors: {
    primary: ['#005cbf'],
    secondary: [''],
    background: {
      main: ['#ffffff'],
      inverse: ['#232323'],
    },
    foreground: '#232323',
  },
  shadows: ['0 2px 3px rgba(0, 0, 0, 0.5)', '0 5px 15px rgba(0, 0, 0, 0.3)'],
};

const CustomThemeProvider: React.FC = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeType>('light');

  return (
    <CustomThemeContext.Provider value={{ themeType, setThemeType }}>
      <ThemeProvider theme={themeType === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
