import Heading          from "./Heading";
import styled           from "styled-components";

import { ThemeContext } from "./BusinessCard";
import { useContext   } from "react";

const StyledHeader = styled.header<{ darkTheme: boolean }>`
  background : ${ ({ darkTheme }) => darkTheme ? "#1a1b21" : "#f5f5f5" };

  align-items    : center  ;
  display        : flex    ;
  flex-direction : column  ;
  padding        : 20px 0  ;
`;

export type HeaderProps = {
  name    : string,
  title   : string,
  website : string,
};

const Header = ( { name, title, website }: HeaderProps ) => {
  const darkTheme = useContext( ThemeContext );

  return (
    <StyledHeader darkTheme={ darkTheme }>
      <Heading type="title"    >{ name    }</Heading>
      <Heading type="subtitle" >{ title   }</Heading>
      <Heading type="small"    >{ website }</Heading>
    </StyledHeader>
)};

export default Header;
