import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing : border-box ;
    padding    : 0          ;
    margin     : 0          ;
  }

  body {
    --color-bg        : #20232a                        ;
    --color-bg-dark   : #16181d                        ;
    --color-bg-light  : #282c34                        ;
    --color-fg        : #999999                        ;
    --color-primary   : #61dafb                        ;
    --color-error     : #e21612                        ;

    --grid-products   : auto / repeat( 2, 22rem )      ;
    --grid-navbar     : auto / 2fr 1fr 1fr 1fr 1fr 2fr ;

    background        : var( --color-bg-dark )         ;
    font-family       : sans-serif                     ;
  }

  @media screen and ( max-width: 46rem ) {
    body {
       --grid-products : auto / repeat( 1, 22rem ) ;
       --grid-navbar   : auto                      ;
    }
  }
`;
