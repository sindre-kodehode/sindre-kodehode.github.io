import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import {
  THEME,
  themes,
} from "./themes";

import { ThemeProvider } from "styled-components";

const ThemeUpdateContext = createContext< ( theme: THEME ) => void >( null! );
const useThemeUpdate     = () => useContext( ThemeUpdateContext );

const ThemeContext = ( { children }: { children: ReactNode } ) => {
  const [ theme, setTheme ] = useState( themes[ THEME.THEME1 ] );

  return (
  <ThemeProvider theme={ theme } >
    <ThemeUpdateContext.Provider 
      value={ ( theme: THEME ) => setTheme( themes[ theme ] ) } >
      { children }
    </ThemeUpdateContext.Provider>
  </ThemeProvider>
)};

export { useThemeUpdate, ThemeContext };
