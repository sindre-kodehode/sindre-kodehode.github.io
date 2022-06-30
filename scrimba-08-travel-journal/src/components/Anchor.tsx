import styled        from "styled-components"
import { ReactNode } from "react";

const StyledA = styled.a`
  color       : ${ ({ theme }) => theme.palette.neutral300    } ;
  font-family : ${ ({ theme }) => theme.font.fontFamily       } ;
  font-size   : ${ ({ theme }) => theme.font.size300          } ;
  font-weight : 400                                             ;
`;

type AnchorProps = {
  href     : string,
  children : ReactNode,
}

const Anchor = ( { children, href }:AnchorProps ) =>
  <StyledA href={ href }>{ children }</StyledA>

export default Anchor;
