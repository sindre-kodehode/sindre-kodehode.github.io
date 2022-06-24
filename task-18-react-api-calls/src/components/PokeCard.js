import styled       from "styled-components";
import PokeImage    from "./PokeImage";
import Preformatted from "./Preformatted";
import pokeError    from "../img/missingno.png";
import pokeBg       from "../img/poke-bg.png";

const StyledCard = styled.section`
  background            : no-repeat center/cover url( ${ pokeBg } ) ;
  display               : grid                                      ;
  grid-template-columns : repeat( 20, 16px )                        ;
  grid-template-rows    : repeat( 18, 16px )                        ;
`;

const PokeCard = ({ 
    data : { 
    id,
    name,
    height,
    weight,
    sprites,
    flavor_text_entries,
    error
  }}) => {

  const pokeInfo = [{
      key  : "number",
      area : "9 / 2 ",
      text : `No.${ id ? id.toString().padStart( 3, "0" ) : "000" }`,
    }, {
      key  : "name",
      area : "3 / 10",
      text : name ? name.toUpperCase() : "MISSINGNO",
    }, {
      key  : "height",
      area : "6 / 10",
      text : `HT: ${ height ? `${ height * 10 }`.padStart( 3, " " ) : 999 }cm`,
    }, {
      key  : "weight",
      area : "8 / 10",
      text : `WT: ${ weight ? `${ ( weight / 10 ).toFixed() }`.padStart( 3, " " ) : 999 }kg`,
    }, {
      key  : "flavor-text",
      area : "12 / 2",
      text : flavor_text_entries ?
             flavor_text_entries
             .find( ({ language, version }) =>
               language.name === "en" &&
               version.name  === "red"
             ).flavor_text
             .replaceAll( "\u000c", "\n" ) :
             error,
  }];

  const pokeSprite = () =>
    sprites ?
    sprites
    .versions
    ["generation-i"]
    ["red-blue"]
    ["front_default"] :
    pokeError;

  return (
  <StyledCard>

    <PokeImage area={ "2 / 2" } sprite={ pokeSprite() } />

    { pokeInfo.map( ({ key, area, text } ) =>
      <Preformatted key={ key } area={ area }>{ text }</Preformatted> )}

  </StyledCard>
)};

export default PokeCard;
