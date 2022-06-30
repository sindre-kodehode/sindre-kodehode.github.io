import styled        from "styled-components";
import { ReactNode } from "react";

const StyledHeading1 = styled.h1`
  color       : ${ ({ theme }) => theme.palette.neutral700    } ;
  font-family : ${ ({ theme }) => theme.font.fontFamily       } ;
  font-size   : ${ ({ theme }) => theme.font.size500          } ;
  font-weight : 700                                             ;
`;

type HeadingProps = {
  children : ReactNode,
}

const Heading1 = ( { children }:HeadingProps ) =>
  <StyledHeading1> { children } </StyledHeading1>

export default Heading1;
