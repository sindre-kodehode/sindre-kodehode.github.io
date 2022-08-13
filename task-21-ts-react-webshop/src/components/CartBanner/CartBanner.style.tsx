import styled from "styled-components" ;

export default styled.header`
  align-items    : center                        ;
  background     : var( --color-bg-light )       ;
  color          : var( --color-fg )             ;
  display        : grid                          ;
  font-weight    : 800                           ;
  grid           : auto-flow / repeat( 3, auto ) ;
  justify-content: space-around                  ;
  text-align     : center                        ;
`;
