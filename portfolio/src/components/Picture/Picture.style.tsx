import styled from "styled-components";

export default styled.picture`
  background     : var( --color-light ) ;
  border-radius  : 0.5rem               ;
  overflow       : hidden               ;
  transition     : background 200ms     ;

  &:hover { background : white ; }

  & :first-child {
    filter         : grayscale( 100% ) ;
    height         : 100%              ;
    mix-blend-mode : multiply          ;
    object-fit     : cover             ;
    transition     : filter 200ms      ;
    width          : 100%              ;

    &:hover { filter : grayscale( 0% ) ; }
  }
`;
