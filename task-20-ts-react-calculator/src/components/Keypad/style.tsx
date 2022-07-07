import styled from "styled-components";

const StyledSection = styled.section`
  background    : ${ ({ theme }) => theme.palette.background } ;
  border-radius : 0.75rem                                      ;
  display       : grid                                         ;
  gap           : 1.5rem                                       ;
  grid          : auto-flow / repeat( 4, 1fr )                 ;
  padding       : 2.0rem                                       ;

  & :nth-last-child( 1 ) { grid-column-end : span 2 ; }
  & :nth-last-child( 2 ) { grid-column-end : span 2 ; }
`;

export default StyledSection;
