import { useRef, useState } from "react";
import Button               from "./Button";
import Output               from "./Output";
import InputNumber          from "./InputNumber";
import Section              from "./Section";
import styled               from "styled-components";

const StyledMain = styled.main`
  background      : #fff   ;
  display         : flex   ;
  gap             : 64px   ;
  justify-content : center ;
  padding         : 32px   ;
`;

const Main = (): JSX.Element => {
  const [ digitSum, setDigitSum ] = useState( 0 );
  const inputEl = useRef<HTMLInputElement>( null! );

  const inputHandler = () => {
    setDigitSum( [ ...inputEl.current.value ].reduce( ( p, c ) => +c + p, 0 ) );
  };

  return (
    <StyledMain>
      <Section header="input" >

        <InputNumber ref={ inputEl }
          onKeyDown={ ({ key }) => { key === "Enter" && inputHandler() } }
        />

        <Button onClick={ inputHandler }> submit </Button>

      </Section>
      <Section header="output" >

        <Output> { digitSum } </Output>

      </Section>
    </StyledMain>
)}

export default Main;
