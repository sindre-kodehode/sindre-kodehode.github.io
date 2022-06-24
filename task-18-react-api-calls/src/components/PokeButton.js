import styled     from "styled-components";
import pokeBorder from "../img/poke-border.png";
import pokeArrow  from "../img/poke-arrow.png";

const StyledButton = styled.button`
  background   : #fff                   ;
  border-image : url(${ pokeBorder }) 8 ;
  border-width : 16px                   ;
  font-family  : "Press Start 2P"       ;
  height       : 64px                   ;
  padding      : 0 16px 0 16px          ;
  position     : relative               ;

  &:hover::before, &:active::before {
    background : no-repeat center/cover url(${ pokeArrow }) ;
    content    : ""                                         ;
    height     : 16px                                       ;
    left       : 0                                          ;
    position   : absolute                                   ;
    width      : 16px                                       ;
  }

  &:active::before { transform : translateX( 2px ) ; }
`;

const PokeButton = ({ children, ...props }) =>
  <StyledButton{ ...props }>
    { children }
  </StyledButton>

export default PokeButton;
