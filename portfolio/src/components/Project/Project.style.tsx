import styled from "styled-components";

export default styled.section`
  display : grid ;
  gap     : 1rem ;

  grid : "image title" 5rem
         "image tags " 1rem
         "image desc " 6rem /
         14rem  17rem       ;

  & :nth-child( 1 ) { grid-area : image ; }
  & :nth-child( 2 ) { grid-area : title ; }
  & :nth-child( 3 ) { grid-area : tags  ; }
  & :nth-child( 4 ) { grid-area : desc  ; }
`;
