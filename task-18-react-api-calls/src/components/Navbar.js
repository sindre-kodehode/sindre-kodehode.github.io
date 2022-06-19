import styled from "styled-components";
import Icon   from "./Icon";

const StyledNav = styled.nav`
  align-items : center  ;
  background  : #20232a ;
  display     : flex    ;
  gap         : 16px    ;
  height      : 64px    ;
  padding     : 0 32px  ;
`;

const Navbar = () =>
  <StyledNav>
    <Icon react size="medium" />
  </StyledNav>

export default Navbar;
