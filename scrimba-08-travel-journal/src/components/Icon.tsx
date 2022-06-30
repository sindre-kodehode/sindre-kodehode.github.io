import styled     from "styled-components";
import globeIcon  from "../assets/img/globe-icon.svg";
import mapPinIcon from "../assets/img/map-pin-icon.svg";

import { css }    from "styled-components";

const StyledImg = styled.img<{ size: SizeType }>`
  ${ ({ size, theme }) => size === "small" && css`
    width  : ${ theme.sizing.size300 } ;
    height : ${ theme.sizing.size300 } ;
  `}

  ${ ({ size, theme }) => size === "medium" && css`
    width  : ${ theme.sizing.size500 } ;
    height : ${ theme.sizing.size500 } ;
  `}

  ${ ({ size, theme }) => size === "large" && css`
    width  : ${ theme.sizing.size700 } ;
    height : ${ theme.sizing.size700 } ;
  `}
`;

type SizeType = "small" | "medium" | "large";
type IconType = "globe" | "mapPin";

type IconProps = {
  type : IconType,
  size : SizeType,
};

const Icon = ( { type, size }:IconProps ) => {
  switch ( type ) {
    case "globe"  : 
      return <StyledImg alt="Globe Icon" src={ globeIcon } size={ size } />
    case "mapPin" : 
      return <StyledImg alt="Map Pin Icon" src={ mapPinIcon } size={ size } />
  }
};

export default Icon;
