import styled from "styled-components";

export default styled.section`
  align-items    : center                    ;
  background     : var( --color-bg-light )   ;
  border-radius  : 1rem                      ;
  display        : grid                      ;
  grid           : auto 16rem auto / 1fr 1fr ;
  overflow       : auto                      ;
  text-transform : uppercase                 ;

  & :nth-child( 1 ) { grid-column-end : span 2 ; }
  & :nth-child( 2 ) { grid-column-end : span 2 ; }
  & :nth-child( 3 ) { justify-self    : start  ; }
  & :nth-child( 4 ) { justify-self    : end    ; }
`;
