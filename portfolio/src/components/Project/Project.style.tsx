import styled from "styled-components";

export default styled.section`
  border-radius     : 0.5rem                                     ;
  box-shadow        : var( --size-shadow ) var( --color-shadow ) ;
  display           : grid                                       ;
  margin            : var( --margin-section )                    ;
  overflow          : hidden                                     ;
  width             : var( --size-section )                      ;

  grid : "header header header header header" 4rem
         ".      .     .       .      .     " 2rem
         ".      image .       title  .     " 5rem
         ".      image .       .      .     " 1rem
         ".      image .       tags   .     " 1rem
         ".      image .       .      .     " 1rem
         ".      image .       desc   .     " 6rem
         ".      .     .       .      .     " 2rem /
         2rem    14rem 1rem    17rem  2rem         ;

  & :nth-child( 1 ) { grid-area : header ; }
  & :nth-child( 2 ) { grid-area : image  ; }
  & :nth-child( 3 ) { grid-area : title  ; }
  & :nth-child( 4 ) { grid-area : tags   ; }
  & :nth-child( 5 ) { grid-area : desc   ; }

  & h1 {
    color          : var( --color-dark ) ;
    font           : var( --font-title ) ;
    letter-spacing : var( --font-ls    ) ;
  }

  & h2 {
    color          : var( --color-light ) ;
    font           : var( --font-header ) ;
    letter-spacing : var( --font-ls     ) ;
  }

  & p {
    color : var( --color-dark ) ;
    font  : var( --font-desc  ) ;
  }

  & header {
    align-content   : center              ;
    background      : var( --color-dark ) ;
    display         : grid                ;
    justify-content : center              ;
  }

  & picture {
    background     : var( --color-light ) ;
    border-radius  : 0.5rem               ;
    overflow       : hidden               ;
    transition     : background 200ms     ;

    &:hover { background : white ; }
  }

  & img {
    filter         : grayscale( 100% ) ;
    height         : 100%              ;
    mix-blend-mode : multiply          ;
    object-fit     : cover             ;
    transition     : filter 200ms      ;
    width          : 100%              ;

    &:hover { filter : grayscale( 0% ) ; }
  }
`;
