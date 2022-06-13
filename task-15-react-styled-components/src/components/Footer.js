import styled from "styled-components";

export const StyledFooter = styled.footer`
  background  : #20232a  ;
  color       : #999     ;
  height      : 64px     ;
  display     : flex     ;
  align-items : center   ;
  padding     : 0 32px   ;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <small>This is footer &copy; Foot Inc.</small>
    </StyledFooter>
  );
}
