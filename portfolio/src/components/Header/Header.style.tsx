import styled from "styled-components";

export default styled.header`
  align-content   : center                         ;
  background      : var( --color-dark )            ;
  border-bottom   : 1px solid var( --color-light ) ;
  display         : grid                           ;
  justify-content : center                         ;

  & :first-child {
    color          : var( --color-light ) ;
    font           : var( --font-header ) ;
    letter-spacing : var( --font-ls     ) ;
    text-transform : uppercase            ;
  }
`;
