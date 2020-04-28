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
  borderRadius: '6px',
  colors: {
    primary: ['#007bff'],
    secondary: [''],
    background: {
      main: ['#232323', '#292929'],
      inverse: ['#ffffff'],
    },
    foreground: '#f5f5f5',
  },
  shadows: [
    'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    '0 15px 20px -5px rgba(0, 0, 0, 0.05)',
    '0 5px 15px rgba(0, 0, 0, 0.3)',
  ],
};

const lightTheme: DefaultTheme = {
  borderRadius: '6px',
  colors: {
    primary: ['#005cbf'],
    secondary: [''],
    background: {
      main: ['#f5f5f5', '#ffffff'],
      inverse: ['#232323'],
    },
    foreground: '#232323',
  },
  shadows: [
    'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    '0 15px 20px -5px rgba(0, 0, 0, 0.05)',
    '0 5px 15px rgba(0, 0, 0, 0.3)',
  ],
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
