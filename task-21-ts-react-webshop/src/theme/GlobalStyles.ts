import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing : border-box ;
    padding    : 0          ;
    margin     : 0          ;
  }

  img { 
    max-width : 16rem;
    height    : 16rem;
  }
`;

export { GlobalStyle };
