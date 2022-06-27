import styled           from "styled-components";

import { ThemeContext } from "./BusinessCard";
import { useContext   } from "react";

const StyledH1 = styled.h1<{ darkTheme: boolean }>`
  color : ${ ({ darkTheme }) => darkTheme ? "#fff" : "#2b283a" };
  font-size   : 25px   ;
  font-weight : 700    ;
`;

const StyledH2 = styled.h2<{ darkTheme: boolean }>`
  color : ${ ({ darkTheme }) => darkTheme ? "#f3bf99" : "#f47d27" };
  font-size   : 12px    ;
  font-weight : 400     ;
`;

const StyledSection = styled.h2<{ darkTheme: boolean }>`
  color : ${ ({ darkTheme }) => darkTheme ? "#f5f5f5" : "#2b283a" };
  font-size   : 16px    ;
  font-weight : 700     ;
  line-height : 1.5     ;
`;

const StyledH3 = styled.h3<{ darkTheme: boolean }>`
  color : ${ ({ darkTheme }) => darkTheme ? "#f5f5f5" : "#4a4e74" };
  font-size   : 10px    ;
  font-weight : 400     ;
  line-height : 1.5     ;
`;

export type HeadingProps = {
  type     : "title" | "subtitle" | "small" | "section"
  children : React.ReactNode
};

const Heading = ( { type, children }: HeadingProps ) => {
  const darkTheme = useContext( ThemeContext );

  switch ( type ) {
    case ( "title" ) : 
      return <StyledH1 darkTheme={ darkTheme }>
        { children }
      </StyledH1>
    case ( "subtitle" ) :
      return <StyledH2 darkTheme={ darkTheme }>
        { children }
      </StyledH2>
    case ( "section" ) :
      return <StyledSection darkTheme={ darkTheme }>
        { children }
      </StyledSection>
    case ( "small" ) :
      return <StyledH3 darkTheme={ darkTheme }>
        { children }
      </StyledH3>
  }
};

export default Heading;
