import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing : border-box ;
    padding    : 0          ;
    margin     : 0          ;
  }

  body {
    --color-bg      : #282c34 ;
    --color-primary : #61dafb ;
  }

  img { 
    max-width : 16rem;
    height    : 16rem;
  }
`;
