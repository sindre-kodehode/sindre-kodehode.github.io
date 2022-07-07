import styled      from "styled-components";

const StyledHeader = styled.header`
  font-family    : ${ ({ theme }) => theme.font.fontFamily   } ;
  color          : ${ ({ theme }) => theme.palette.textLight } ;

  padding        : 1rem 0rem                                   ;

  display        : grid                                        ;
  grid           : 1fr / auto-flow                             ;
  justify-content: space-between                               ;
`;

export default StyledHeader;
