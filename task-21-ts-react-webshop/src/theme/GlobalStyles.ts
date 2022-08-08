import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing : border-box ;
    padding    : 0          ;
    margin     : 0          ;
  }

  main {
    display               : grid        ;
    grid-template-columns : 1fr 1fr 1fr ;

    & :first-child    { grid-area : 1 / span 3 ; }
    & :nth-child( 2 ) { grid-area : 2 / span 3 ; }
    & :nth-child( 3 ) { grid-area : 3 / span 3 ; }
  }

  img { 
    max-width : 16rem;
    height    : 16rem;
  }
`;

export { GlobalStyle };
