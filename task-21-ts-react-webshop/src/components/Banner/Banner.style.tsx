import styled from "styled-components" ;

export default styled.header<{ error?: boolean }>`
  ${ ({ error }) => error && 
    "--color-fg : var( --color-error ) ;"
  }

  background  : var( --color-bg-light ) ;
  color       : var( --color-fg )       ;
  font-weight : 800                     ;
  padding     : 1rem                    ;
  text-align  : center                  ;
`;
