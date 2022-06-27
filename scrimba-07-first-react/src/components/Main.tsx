import styled           from "styled-components"
import Section          from "./Section";

import { useContext   } from "react";
import { SectionProps } from "./Section";
import { ThemeContext } from "./BusinessCard";

const StyledMain = styled.main<{ darkTheme: boolean }>`
  background : ${ ({ darkTheme }) => darkTheme ? "#1a1b21" : "#f5f5f5" };

  display        : flex                ;
  flex-direction : column              ;
  gap            : 17px                ;
  padding        : 33px 35px 44px 35px ;
`;

type MainProps = {
  sections : SectionProps[]
}

const Main = ( { sections }: MainProps ) => {
  const darkTheme = useContext( ThemeContext );

  return (
    <StyledMain darkTheme={ darkTheme }>
    { sections.map( ({ heading, body }) =>
      <Section key={ heading } heading={ heading } body={ body } /> )}
    </StyledMain>
)};

export default Main;
