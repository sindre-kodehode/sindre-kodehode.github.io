import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background    : #61dafb             ;
  border        : none                ;
  border-radius : 4px                 ;
  color         : #000                ;
  font-size     : 20px                ;
  padding       : 16px 24px           ;
  transition    : background 200ms 0s ;
  transition    : filter 200ms 0s     ;

  &:disabled       { filter     : grayscale( 100% ) ; }
  &:hover:enabled  { background : #fff              ; }
  &:active:enabled { 
    box-shadow : 0px 1px 1px black inset ;
    transform  : translateY( 1px )       ; 
  }
`;

const Button = ({ children, ...props }) =>
  <StyledButton { ...props }> { children } </StyledButton>

export default Button;
