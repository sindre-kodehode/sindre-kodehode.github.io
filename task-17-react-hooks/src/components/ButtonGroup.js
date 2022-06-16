import styled from "styled-components";

const StyledWrapper = styled.div`
  background    : #282c34       ;
  border-radius : 0 0 16px 16px ;
  padding       : 16px          ;
  display       : flex          ;
  gap           : 16px          ;
`;

const ButtonGroup = ({ children, ...props }) =>
  <StyledWrapper { ...props }> { children } </StyledWrapper>;

export default ButtonGroup;
