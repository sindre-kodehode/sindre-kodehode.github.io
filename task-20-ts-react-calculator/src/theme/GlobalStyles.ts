import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing : border-box ;
    padding    : 0          ;
    margin     : 0          ;
  }

  body {
    background : ${ ({ theme }) => theme.palette.backgroundLight } ;
  }

  #root {
    display    : grid       ;
    gap        : 1.5rem     ;
    margin     : 0 auto     ;
    max-width  : 33.75rem   ;
    padding    : 5.625rem 0 ;
  }
`;

export { GlobalStyle };
