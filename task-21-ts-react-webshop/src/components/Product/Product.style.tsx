import styled from "styled-components";

export default styled.section`
  align-items   : center                    ;
  background    : var( --color-bg-light )   ;
  border-radius : 1rem                      ;
  color         : var( --color-fg )         ;
  display       : grid                      ;
  grid          : 8rem 16rem 4rem / 1fr 1fr ;
  justify-items : center                    ;
  text-transform: uppercase                 ;

  & :nth-child( 1 ) { grid-column-end : span 2 ; }
  & :nth-child( 2 ) { grid-column-end : span 2 ; }

  & h3 {
    background    : var( --color-bg ) ;
    height        : 8rem              ;
    overflow      : hidden            ;
    text-overflow : ellipsis          ;
    border-radius : 1rem 1rem 0 0     ;
    padding       : 1rem              ;
    width         : 100%              ;
  }

  & picture {
    background    : white  ;
    border-radius : 0.5rem ;
    height        : 100%   ;
    padding       : 0.5rem ;
    margin        : 1rem   ;
  }

  & img {
    height    : 100%    ;
    object-fit: contain ;
    width     : 100%    ;
  }
`;
