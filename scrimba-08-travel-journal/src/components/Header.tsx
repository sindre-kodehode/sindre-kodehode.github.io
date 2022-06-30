import styled    from "styled-components";
import Icon      from "./Icon";
import Heading2  from "./Heading2";

import { TITLE } from "../consts/strings";

const StyledHeader = styled.header`
  align-items     : center                                    ;
  background      : ${ ({ theme }) => theme.palette.primary } ;
  display         : grid                                      ;
  gap             : 0.5rem                                    ;
  grid-auto-flow  : column                                    ;
  justify-content : center                                    ;
`;

const Header = () =>
  <StyledHeader>
    <Icon type="globe" size="medium" />
    <Heading2>{ TITLE }</Heading2>
  </StyledHeader>

export default Header;
