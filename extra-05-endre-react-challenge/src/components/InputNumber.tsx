import { Ref, forwardRef } from "react";
import styled               from "styled-components";

const StyledInputNumber = styled.input`
  appearance    : textfield ;
  background    : #20232a   ;
  border        : none      ;
  border-radius : 4px       ;
  color         : #fff      ;
  font-size     : 20px      ;
  padding       : 16px 24px ;

  &:hover, &:focus { background : #353b45           ; }
  &:focus          { outline    : #61dafb solid 2px ; }
`;

type InputNumberProps = {
  onKeyDown : ( e:React.KeyboardEvent<HTMLInputElement> ) => void,
}

const InputNumber = forwardRef(
  ( { onKeyDown, ...props }: InputNumberProps, ref:Ref<HTMLInputElement> ) =>
    <StyledInputNumber
      type          = "number"
      onKeyDown     = { onKeyDown }
      ref           = { ref }
      { ...props }
    />
);

export default InputNumber;
