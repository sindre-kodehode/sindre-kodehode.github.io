import styled from "styled-components";

export const StyledHeader = styled.header`
  background : #282c34 ;
  color      : #61dafb ;
  padding    : 32px 0  ;
  text-align : center  ;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>This is header</h1>
    </StyledHeader>
  );
}
