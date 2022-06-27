import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing  : border-box          ;
    font-family : 'Inter', sans-serif ;
    margin      : 0                   ;
    padding     : 0                   ;
  }
  
  body {
    background : #1c1c1c ;
    margin     : 0 auto  ;
    max-width  : 550px   ;
  }
`;

export default GlobalStyle;
