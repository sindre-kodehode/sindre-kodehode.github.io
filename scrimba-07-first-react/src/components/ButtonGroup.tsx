import Button from "./Button";
import styled from "styled-components";

import { ThemeContext } from "./BusinessCard";
import { useContext   } from "react";

const StyledSection = styled.section<{ darkTheme: boolean }>`
  background : ${ ({ darkTheme }) => darkTheme ? "#1a1b21" : "#f5f5f5" };

  display         : flex     ;
  gap             : 17px     ;
  justify-content : center   ;
  padding         : 0px 35px ;
`;

const ButtonGroup = () => {
  const darkTheme = useContext( ThemeContext );

  return (
    <StyledSection darkTheme={ darkTheme }>
      <Button type="mail"     variant="secondary"> Email    </Button>
      <Button type="linkedin" variant="primary"  > LinkedIn </Button>
    </StyledSection>
)};

export default ButtonGroup;
