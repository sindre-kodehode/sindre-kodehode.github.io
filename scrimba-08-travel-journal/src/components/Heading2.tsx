import styled        from "styled-components";
import { ReactNode } from "react";

const StyledHeading2 = styled.h2`
  color          : ${ ({ theme }) => theme.palette.neutral100 } ;
  font-family    : ${ ({ theme }) => theme.font.fontFamily    } ;
  font-size      : ${ ({ theme }) => theme.font.size400       } ;
  font-weight    : 500                                          ;
  letter-spacing : -0.06em                                      ;
`;

type HeadingProps = {
  children : ReactNode,
}

const Heading2 = ( { children }:HeadingProps ) =>
  <StyledHeading2> { children } </StyledHeading2>

export default Heading2;
