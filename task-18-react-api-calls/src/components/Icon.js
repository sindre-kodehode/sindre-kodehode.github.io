import styled, { css } from "styled-components";
import reactLogo       from "../img/react-logo.png";

const ReactLogo = styled.img`
  ${ ({ size }) => {
    switch ( size ) {
      case "large" : return css`
        height : 64px ;
        width  : 64px ;
      `;
      case "medium" : return css`
        height : 32px ;
        width  : 32px ;
      `;
      case "small" : return css`
        height : 16px ;
        width  : 16px ;
      `;
  }}}
`;

const Icon = ({ react, ...props }) =>
  <ReactLogo { ...props } src={ react && reactLogo } />;

export default Icon;
