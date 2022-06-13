import styled    from "styled-components";
import reactLogo from "../img/react-logo.png";

export const StyledNav = styled.nav`
  background : #20232a ;
  display    : flex    ;
  gap        : 16px    ;
  height     : 64px    ;
`;

export const ReactLogo = styled.img`
  height  : 40px ;
  padding : 12px ;
  width   : 40px ;  
`;

export const StyledUl = styled.ul`
  align-items : center ;
  display     : flex   ;
  gap         : 16px   ;
  list-style  : none   ;
  height      : 100%   ;
`;

export const StyledA = styled.a`
  text-decoration : none ;
  color           : #fff ;

  &:hover {
    color : #61dafb ;
  }
`;

export default function Navbar() {
  return (
    <StyledNav>
      <ReactLogo src={reactLogo}/>
      <StyledUl>
        <li> <StyledA href="#"> Navbar link </StyledA> </li>
        <li> <StyledA href="#"> Navbar link </StyledA> </li>
        <li> <StyledA href="#"> Navbar link </StyledA> </li>
      </StyledUl>
    </StyledNav>
  );
}
