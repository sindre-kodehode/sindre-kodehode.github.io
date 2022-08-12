import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing : border-box ;
    padding    : 0          ;
    margin     : 0          ;
  }

  body {
    --color-bg       : #20232a ;
    --color-bg-light : #282c34 ;
    --color-fg       : #999999 ;
    --color-primary  : #61dafb ;
  }
`;
