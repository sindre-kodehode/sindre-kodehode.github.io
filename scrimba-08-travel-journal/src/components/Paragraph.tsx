import styled        from "styled-components";
import { ReactNode } from "react";

const StyledP = styled.p`
  color          : ${ ({ theme }) => theme.palette.neutral700    } ;
  font-family    : ${ ({ theme }) => theme.font.fontFamily       } ;
  font-size      : ${ ({ theme }) => theme.font.size300          } ;
  font-weight    : 400                                             ;
  line-height    : 150%                                            ;
`;

type ParagraphProps = {
  children : ReactNode,
};

const Paragraph = ( { children }:ParagraphProps ) =>
  <StyledP>{ children }</StyledP>

export default Paragraph;
