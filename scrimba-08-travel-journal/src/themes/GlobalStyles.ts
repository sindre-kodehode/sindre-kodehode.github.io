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
    border-radius      : 1rem                                         ;
    box-shadow         : 1rem 1rem 1rem -1rem 
                         ${ ({ theme }) => theme.palette.neutral700 } ;
    display            : grid                                         ;
    grid-template-rows : 3rem auto                                    ;
    margin             : 2rem 0rem 0rem 0rem                          ; 
    overflow           : hidden                                       ;
  }
`;

export default GlobalStyle;
