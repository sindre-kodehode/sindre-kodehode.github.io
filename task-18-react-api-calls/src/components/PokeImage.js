import styled, { css } from "styled-components";

const StyledFrame = styled.div`
  height   : 112px    ;
  position : relative ;
  width    : 112px    ;

  ${ ({ area }) => area && css`
    grid-area : ${ area } ;
  `}
`;

const StyledImg = styled.img`
  bottom           : 0             ;
  left             : 25%           ;
  position         : absolute      ;
  transform-origin : bottom        ;
  transform        : scale( 200% ) ;
`;

const PokeImage = ({ area, sprite }) => 
  <StyledFrame area={ area }>
    <StyledImg src={ sprite } />
  </StyledFrame>

export default PokeImage;
