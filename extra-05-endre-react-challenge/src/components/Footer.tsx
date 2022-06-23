import styled from "styled-components";

const StyledFooter = styled.footer`
  align-items : center  ;
  background  : #20232a ;
  color       : #999    ;
  display     : flex    ;
  height      : 64px    ;
  padding     : 0 32px  ;
`;

const Footer = (): JSX.Element =>
  <StyledFooter>
    <small>This is footer &copy; Foot Inc.</small>
  </StyledFooter>

export default Footer;
