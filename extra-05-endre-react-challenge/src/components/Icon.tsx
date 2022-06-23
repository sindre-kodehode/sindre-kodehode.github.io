import styled    from "styled-components";
import reactLogo from "../img/react-logo.png";

const ReactLogo = styled.img`
  height : 32px ;
  width  : 32px ;
`;

export declare interface IconProps {
  react?: boolean,
};

const Icon = ( { react }: IconProps ) =>
  <ReactLogo src={ react && reactLogo } />

export default Icon;
