import { ReactNode } from "react";
import styled        from "styled-components";

const StyledButton = styled.button`
  background    : #61dafb             ;
  border        : none                ;
  border-radius : 4px                 ;
  color         : #000                ;
  font-size     : 20px                ;
  padding       : 16px 24px           ;
  transition    : background 200ms 0s ;
  transition    : filter 200ms 0s     ;

  &:hover  { background : #fff           ; }
  &:focus  { outline    : #20232a solid 4px ; }
  &:active { 
    box-shadow : 0px 1px 1px black inset ;
    transform  : translateY( 1px )       ; 
  }
`;

export declare interface ParagraphProps {
  children : ReactNode,
  onClick  : () => void,
}

const Button = ( { children, ...props }:ParagraphProps  ) =>
  <StyledButton { ...props }> { children } </StyledButton>

export default Button;
