import styled from "styled-components";

export default styled.section`
  background         : var( --color-dark )                        ;
  border-radius      : var( --border-radius )                     ;
  box-shadow         : var( --size-shadow ) var( --color-shadow ) ;
  display            : grid                                       ;
  grid-template-rows : 4rem                                       ;
  margin             : var( --margin-section )                    ;
  overflow           : hidden                                     ;
  width              : var( --size-section )                      ;
`;
