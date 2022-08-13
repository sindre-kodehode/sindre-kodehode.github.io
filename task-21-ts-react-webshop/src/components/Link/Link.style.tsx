import { Link } from "react-router-dom";
import styled   from "styled-components";

export default styled( Link )`
  color           : var( --color-primary ) ;
  font-weight     : 800                    ;
  margin          : 0rem 1rem              ;
  text-decoration : none                   ;
  text-transform  : uppercase              ;
  transition      : filter 200ms           ;

  &:hover {
    filter        : grayscale( 100% )      ;
  }
`;
