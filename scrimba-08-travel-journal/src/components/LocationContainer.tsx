import styled     from "styled-components";
import Icon       from "./Icon";
import Emphasised from "./Emphasised";
import Anchor     from "./Anchor";

import { MAPS }   from "../consts/strings";

const StyledSection = styled.section`
  display         : grid   ;
  gap             : 0.5rem ;
  grid-auto-flow  : column ;
  justify-content : left   ;
  align-items     : end    ;
`;

type LocationContainerProps = {
  location : string,
  map      : string,
};

const LocationContainer = ( { location, map }:LocationContainerProps ) =>
  <StyledSection>
    <Icon type="mapPin" size="small" />
    <Emphasised>{ location }</Emphasised>
    <Anchor href={ map }>{ MAPS }</Anchor>
  </StyledSection>

export default LocationContainer;
