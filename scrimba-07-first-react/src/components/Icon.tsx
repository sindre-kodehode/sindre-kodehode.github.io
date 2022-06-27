import styled       from "styled-components";

import mailIcon     from "../img/mail-icon.svg"
import linkedinIcon from "../img/linkedin-icon.svg";

const StyledImg = styled.img`
  width  : 16px ;
  height : 16px ;
`;

export type IconType = "mail" | "linkedin"

export type IconProps = {
  type : IconType
}

const Icon = ( { type }: IconProps ) => {
  switch ( type ) {
    case ( "mail"     ) : return <StyledImg src={ mailIcon     } alt="" />
    case ( "linkedin" ) : return <StyledImg src={ linkedinIcon } alt="" />
  }
}

export default Icon;
