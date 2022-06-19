import styled, { css } from "styled-components";

const StyledImg = styled.img`
  image-rendering : pixelated ;
  transform       : scaleX( -1 ) ;
  transform       : scale(   2 ) ;

  ${ ({ area }) => area && css`
    grid-area     : ${ area }    ;
  `}

`;

const PokeImage = ({ children, ...props }) => 
  <StyledImg { ...props }>
    { children }
  </StyledImg>

export default PokeImage;
