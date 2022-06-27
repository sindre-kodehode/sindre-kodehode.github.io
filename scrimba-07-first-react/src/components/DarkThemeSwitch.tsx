import styled from "styled-components";

import { ChangeEventHandler } from "react";

const StyledInput = styled.input`
  display : none ;

  &:checked + label::before {
    background    : #918e9b             ;
    transform     : translateX( 0% )    ;
    transition    : transform 0.2s ease ;
  }

  &:not( :checked ) + label::before {
    background    : #fff                ;
    transform     : translateX( 75% )   ;
    transition    : transform 0.2s ease ;
  }
`;

const StyledLabel = styled.label`
    background     : #1a1b21           ;
    border         : 2px solid #fff    ;
    border-radius  : 16px              ;
    content        : ""                ;
    height         : 28px              ;
    margin         : 0px 0px 12px auto ;
    padding        : 2px 4px           ;
    width          : 48px              ;

  &::before {
    border-radius : 10px  ;
    content       : ""    ;
    height        : 20px  ;
    width         : 20px  ;
    display       : block ;
  }
`;

export type DarkThemeSwitchType = {
  checked  : boolean,
  onChange : ChangeEventHandler<HTMLInputElement>,
}

const DarkThemeSwitch = ( { checked, onChange }:DarkThemeSwitchType ) =>
  <>
    <StyledInput id="dark-theme" type="checkbox" onChange={ onChange } checked={ checked } />
    <StyledLabel htmlFor="dark-theme"> </StyledLabel>
  </>

export default DarkThemeSwitch;
