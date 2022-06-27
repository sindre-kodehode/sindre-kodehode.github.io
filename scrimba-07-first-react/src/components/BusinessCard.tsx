import styled          from "styled-components";

import ButtonGroup     from "./ButtonGroup";
import Footer          from "./Footer";
import Header          from "./Header";
import Main            from "./Main";
import ProfilePicture  from "./ProfilePicture";
import DarkThemeSwitch from "./DarkThemeSwitch";

import {
  createContext,
  useState,
} from "react";

import { 
  HEADER,
  SECTIONS,
} from "./Consts";

export const ThemeContext = createContext( true );

const StyledArticle = styled.article`
  background     : #23252c    ;
  display        : flex       ;
  flex-direction : column     ;
  height         : 868px      ;
  padding        : 44px 116px ;
  width          : 550px      ;
`;

const BusinessCard = () => {
  const [ darkTheme, setDarkTheme ] = useState( true );
  const toggleDarkTheme = () => setDarkTheme( prevTheme => !prevTheme )

  return (
    <StyledArticle>
      <ThemeContext.Provider value={ darkTheme }>

        <DarkThemeSwitch checked={ darkTheme } onChange={ toggleDarkTheme } />

        <ProfilePicture />

        <Header { ...HEADER } />

        <ButtonGroup />

        <Main sections={ SECTIONS } />

        <Footer />

      </ThemeContext.Provider>
    </StyledArticle>
)};

export default BusinessCard;
