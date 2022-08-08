import styled from "styled-components";

const StyledSection = styled.section`
  align-items           : center              ;
  display               : grid                ;
  gap                   : 0.5rem              ;
  grid-template-columns : auto 1rem 1rem 1rem ;
  grid-template-rows    : 1rem 1rem           ;
  justify-items         : center              ;

  & input { opacity : 0 ; }
`;

export default StyledSection;
