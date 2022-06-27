import styled, { css }    from "styled-components";
import Icon, { IconType } from "./Icon";

const StyledButton = styled.button<{ variant : VariantType }>`
  align-items     : center   ;
  border          : none     ;
  border-radius   : 6px      ;
  display         : flex     ;
  font-size       : 14px     ;
  font-weight     : 500      ;
  gap             : 8px      ;
  justify-content : center   ;
  padding         : 9px 12px ;
  width           : 100%     ;

  ${ ({ variant }) => variant === "primary" && css`
    background : #5093e2 ;
    color      : #fff    ;
  `}

  ${ ({ variant }) => variant === "secondary" && css`
    background : #fff              ;
    border     : #d1d5d8 solid 1px ;
    color      : #374151           ;
  `}
`;

type VariantType = "primary" | "secondary";

export type ButtonProps = {
  type     : IconType
  variant  : VariantType
  children : string
};

const Button = ( { type, variant, children }:ButtonProps ) =>
  <StyledButton variant={ variant }>
    <Icon type={ type } />
      { children }
  </StyledButton>

export default Button;
