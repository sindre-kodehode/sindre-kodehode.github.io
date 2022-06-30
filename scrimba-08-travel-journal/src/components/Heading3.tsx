import styled        from "styled-components";
import { ReactNode } from "react";

const StyledHeading3 = styled.h3`
  color       : ${ ({ theme }) => theme.palette.neutral700 } ;
  font-family : ${ ({ theme }) => theme.font.fontFamily    } ;
  font-size   : ${ ({ theme }) => theme.font.size300       } ;
  font-weight : 700                                          ;
`;

type HeadingProps = {
  children : ReactNode,
}

const Heading3 = ( { children }:HeadingProps ) =>
  <StyledHeading3> { children } </StyledHeading3>

export default Heading3;
