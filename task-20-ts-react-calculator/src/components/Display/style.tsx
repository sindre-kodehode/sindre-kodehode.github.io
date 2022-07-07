import styled from "styled-components";

const StyledOutput = styled.output`
  background      : ${ ({ theme }) => theme.palette.backgroundDark } ;
  color           : ${ ({ theme }) => theme.palette.textLight      } ;

  font-family     : ${ ({ theme }) => theme.font.fontFamily        } ;
  font-size       : 3.5625rem                                        ;

  border-radius   : 0.75rem                                          ;

  height          : 8rem                                             ;
  padding         : 0rem 2rem                                        ;

  align-content   : center                                           ;
  display         : grid                                             ;
  justify-content : right                                            ;
`;

export default StyledOutput;
