import { useRef, useState } from "react";
import Section              from "./Section";
import styled               from "styled-components";
import Button               from "./Button";

const StyledInputNumber = styled.input`
  background    : #353b45   ;
  border        : none      ;
  border-radius : 4px       ;
  color         : #fff      ;
  font-size     : 20px      ;
  padding       : 16px 24px ;
  appearance    : textfield ;

  &:hover, &:active { 
    background : #20232a ; 
  }
`;

const StyledOutput = styled.output`
  background    : #353b45   ;
  border        : none      ;
  border-radius : 4px       ;
  color         : #fff      ;
  font-size     : 20px      ;
  padding       : 16px 24px ;
`;

const StyledMain = styled.main`
  background      : #fff   ;
  display         : flex   ;
  gap             : 64px   ;
  justify-content : center ;
  padding         : 32px   ;
`;

const Main = (): JSX.Element => {
  const [ digitSum, setDigitSum ] = useState( "" );
  const inputEl                   = useRef<HTMLInputElement>( null! );

  const clickHandler = () => {
    let digits : number = inputEl.current.valueAsNumber;
    let sum    : number = 0;

    while ( digits > 0 ) {
      const digit = digits % 10;

      sum += digit;

      digits = ( digits - digit ) / 10 ;
    }

    setDigitSum( sum.toString() );
  };

  return (
    <StyledMain>
      <Section header="input" >
        <StyledInputNumber ref={ inputEl } type="number" />
        <Button onClick={ clickHandler }> submit </Button>
      </Section>
      <Section header="output" >
        <StyledOutput>
          { digitSum || 0 }
        </StyledOutput>
      </Section>
    </StyledMain>
)}

export default Main;
