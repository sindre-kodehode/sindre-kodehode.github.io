import styled           from "styled-components";

import { useContext   } from "react";
import { ThemeContext } from "./BusinessCard";

const StyledParagraph = styled.p<{ darkTheme: boolean }>`
  color : ${ ({ darkTheme }) => darkTheme ? "#dcdcdc" : "#4a4e74" };

  font-size   : 10px    ;
  font-weight : 400     ;
  line-height : 1.5     ;
`;

type ParagraphProps = {
  children : React.ReactNode,
};

const Paragraph = ( { children }:ParagraphProps ) => {
  const darkTheme = useContext( ThemeContext );

  return (
    <StyledParagraph darkTheme={ darkTheme } >
      { children }
    </StyledParagraph>
)};

export default Paragraph;
