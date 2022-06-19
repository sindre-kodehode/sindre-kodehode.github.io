import styled from "styled-components";

const StyledHeader = styled.header`
  background : #282c34 ;
  color      : #61dafb ;
  padding    : 32px 0  ;
  text-align : center  ;
`;

const Header = (): JSX.Element => 
  <StyledHeader>
    <h1>React Props with TypeScript</h1>
  </StyledHeader>;

export default Header;
