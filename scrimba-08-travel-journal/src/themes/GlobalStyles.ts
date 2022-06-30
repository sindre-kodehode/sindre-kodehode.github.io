import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing : border-box ;
    padding    : 0          ;
    margin     : 0          ;
  }

  body {
    background : ${ ({ theme }) => theme.palette.neutral200 } ;
    margin     : 0 auto                                       ;
    max-width  : 34rem                                        ;
  }

  #root {
    background         : ${ ({ theme }) => theme.palette.neutral100 } ;
    display            : grid                                         ;
    grid-template-rows : 3rem auto                                    ;
  }
`;

export default GlobalStyle;
