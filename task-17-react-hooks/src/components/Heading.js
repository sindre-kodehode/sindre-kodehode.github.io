import styled from "styled-components";

const StyledHeading = styled.h2`
  background    : #20232a       ;
  border-radius : 16px 16px 0 0 ;
  color         : #999          ;
  font-size     : 24px          ;
  font-weight   : 400           ;
  padding       : 16px          ;
  text-align    : center        ;
`;

const Heading = ({ children, ...props }) =>
  <StyledHeading{ ...props }> { children } </StyledHeading>

export default Heading;
