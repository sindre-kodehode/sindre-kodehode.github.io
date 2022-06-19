import styled, { css } from "styled-components";

const StyledPre = styled.pre`
  color       : #000             ;
  font-family : "Press Start 2P" ;
  font-size   : 16px             ;
  line-height : 16px             ;
  ${ ({ area }) => area && css`
    grid-area : ${ area }        ;
  `}
`;

const Preformatted = ({ children, ...props }) =>
  <StyledPre { ...props }>
    { children }
  </StyledPre>

export default Preformatted;
