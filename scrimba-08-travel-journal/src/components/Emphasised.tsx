import styled        from "styled-components";
import { ReactNode } from "react";

const StyledEm = styled.em`
  color          : ${ ({ theme }) => theme.palette.neutral700    } ;
  font-family    : ${ ({ theme }) => theme.font.fontFamily       } ;
  font-size      : ${ ({ theme }) => theme.font.size300          } ;
  font-style     : normal                                          ;
  font-weight    : 400                                             ;
  letter-spacing : 0.16em                                          ;
  text-transform : uppercase                                       ;
`;

type EmphasisedProps = {
  children : ReactNode,
};

const Emphasised = ( { children }:EmphasisedProps ) =>
  <StyledEm>{ children }</StyledEm>

export default Emphasised;
