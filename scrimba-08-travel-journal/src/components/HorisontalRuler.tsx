import styled from "styled-components";

const StyledHR = styled.hr`
  border-radius : 1rem                                                          ;
  border        : solid ${ ({ theme }) => theme.palette.neutral150 }  0.0625rem ;
  margin        : 0rem 2rem                                                     ;
`;

const HorisontalRuler = () =>
  <StyledHR />

export default HorisontalRuler;
