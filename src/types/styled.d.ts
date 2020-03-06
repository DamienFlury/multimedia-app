import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primary: string[];
      secondary: string[];
      background: string[];
      text: string;
    };

    shadows: string[];
  }
}
