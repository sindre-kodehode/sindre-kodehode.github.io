import { 
  DefaultTheme,
  ThemeProvider as StyledThemeProvider
} from "styled-components";

import { ReactNode } from "react";

const theme: DefaultTheme = {
  font    : {
    fontFamily : "'Inter', sans-serif",

    size300    : "0.75rem",
    size400    : "1.00rem",
    size500    : "1.75rem",
  },

  palette : {
    primary    : "#f55a5a",

    neutral100 : "#ffffff",
    neutral150 : "#f5f7fb",
    neutral200 : "#e5e5e5",
    neutral300 : "#918e9b",
    neutral700 : "#2b283a",
  },
  
  sizing : {
    size300    : "16px",
    size500    : "24px",
    size700    : "64px",
  }
};

type ThemeProviderProps = {
  children : ReactNode,
};

const ThemeProvider = ( { children }:ThemeProviderProps ) =>
  <StyledThemeProvider theme={ theme } >{ children }</StyledThemeProvider>

export default ThemeProvider;
