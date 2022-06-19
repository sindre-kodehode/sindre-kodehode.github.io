import styled from "styled-components";

const StyledHeader = styled.header`
  background : #282c34 ;
  color      : #61dafb ;
  padding    : 32px 0  ;
  text-align : center  ;
`;

const Header = () => 
  <StyledHeader>
    <h1>React API Calls</h1>
  </StyledHeader>;

export default Header;
