import React, { useState } from 'react';

type ThemeType = 'dark' | 'light';

type ContextState = {
  themeType: ThemeType;
  setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>;
};

export const CustomThemeContext = React.createContext<ContextState>({
  themeType: 'light',
  setThemeType: () => {},
});

const CustomThemeProvider: React.FC = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeType>('light');

  return (
    <CustomThemeContext.Provider value={{ themeType, setThemeType }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
