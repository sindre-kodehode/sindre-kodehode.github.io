import styled        from "styled-components";

import twitterIcon   from "../img/twitter-icon.svg";
import facebookIcon  from "../img/facebook-icon.svg";
import instagramIcon from "../img/instagram-icon.svg";
import githubIcon    from "../img/github-icon.svg";

import { ThemeContext } from "./BusinessCard";
import { useContext   } from "react";

const StyledFooter = styled.footer<{ darkTheme: boolean }>`
  background      : ${ ({ darkTheme }) => darkTheme ? "#161619" : "#d5d4d8" };
  border-radius   : 0px 0px 10px 10px ;
  display         : flex              ;
  gap             : 24px              ;
  justify-content : center            ;
  padding         : 20px 0            ;
`;

const Footer = () => {
  const darkTheme = useContext( ThemeContext );

  return (
    <StyledFooter darkTheme={ darkTheme }>
      <img src={ twitterIcon }/>
      <img src={ facebookIcon }/>
      <img src={ instagramIcon }/>
      <img src={ githubIcon }/>
    </StyledFooter>
)};

export default Footer;
