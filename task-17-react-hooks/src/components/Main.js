import { useState, useEffect } from "react";
import styled                  from "styled-components";
import Button                  from "./Button";
import ButtonGroup             from "./ButtonGroup";
import Card                    from "./Card";
import Heading                 from "./Heading";

const StyledMain = styled.main`
  background      : #fff   ;
  display         : flex   ;
  gap             : 64px   ;
  justify-content : center ;
  padding         : 32px   ;
`;

const Main = () => {
  const [ num,   setNum   ] = useState( 0    );
  const [ bool,  setBool  ] = useState( true );
  const [ count, setCount ] = useState( 0    );

  const decNum     = () => ( num > 0 ) && setNum(  num - 1 );
  const incNum     = () => setNum(  num + 1 );
  const toggleBool = () => setBool( !bool   );
  const boolText   = () => bool ? "True" : "Not True";
  const numIsZero  = () => num <= 0;

  useEffect( () => {
    setTimeout( () => {
      setCount( count + 1 );
    }, 1000 );
  }, [ count ] );

  return (
    <StyledMain>

      <Card>
        <Heading>{ num }</Heading>

        <ButtonGroup>
          <Button disabled={ numIsZero() } onClick={ decNum } > - </Button>
          <Button onClick={ incNum } > + </Button>
        </ButtonGroup>
      </Card>

      <Card>
        <Heading>{ boolText() }</Heading>

        <ButtonGroup>
          <Button onClick={ toggleBool } > Toggle </Button>
        </ButtonGroup>
      </Card>

      <Card>
        <Heading>{ count }</Heading>
      </Card>

    </StyledMain>
  );
}

export default Main;
