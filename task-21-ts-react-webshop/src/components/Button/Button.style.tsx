import styled from "styled-components";

export default styled.button`
  background     : var( --color-primary )  ;
  border         : none                    ;
  border-radius  : 0.5rem                  ;
  color          : var( --color-bg )       ;
  font-size      : 1rem                    ;
  font-weight    : 800                     ;
  margin         : 1rem                    ;
  padding        : 1rem 1.5rem             ;
  text-transform : uppercase               ;
  transition     : filter 200ms 0s         ;

  &:hover { 
    filter       : grayscale( 100% )       ;
  }

  &:active { 
    box-shadow   : 0px 1px 1px black inset ;
    transform    : translateY( 1px )       ; 
  }
`;
