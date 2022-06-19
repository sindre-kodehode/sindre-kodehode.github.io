import styled       from "styled-components";
import PokeImage    from "./PokeImage";
import Preformatted from "./Preformatted.js";

const StyledCard = styled.section`
  border                : 2px solid #000     ;
  display               : grid               ;
  grid-template-columns : repeat( 20, 16px ) ;
  grid-template-rows    : repeat( 18, 16px ) ;
  outline               : 8px solid #a87048  ;
  padding               : 8px                ;
`;

const PokeCard = ({ 
    data : { id, name, height, weight, sprites }, 
    spec : { flavor_text_entries },
    ...props
  }) => {

  const pokeInfo = [{
      key  : "number",
      area : "9 / 2 / span 1 / span 5",
      text : `No.${ id && id.toString().padStart( 3, "0" ) }`,
    }, {
      key  : "name",
      area : "3 / 10 / span 7 / span 10",
      text : name && name.toUpperCase(),
    }, {
      key  : "height",
      area : "6 / 10 / span 7 / span 10",
      text : `HT: ${ height && height }"`,
    }, {
      key  : "weight",
      area : "8 / 10 / span 7 / span 10",
      text : `WT: ${ weight && weight }lb`,
    }, {
      key  : "flavor-text",
      area : "12 /  2 / span  5 / span 18",
      text : flavor_text_entries &&
             flavor_text_entries
             .find( ({ language, version }) => 
               language.name === "en" &&
               version.name  === "red"
             ).flavor_text
             .replaceAll( "\u000c", "\n" )
  }];

  const pokeSprite = () =>
    sprites &&
    sprites
    .versions
    ["generation-i"]
    ["red-blue"]
    ["front_default"];

  return (
  <StyledCard {...props }>

    <PokeImage area={ "3 / 3 / span 7 / span 7" } src={ pokeSprite() } />

    { pokeInfo.map( ({ key, area, text } ) =>
      <Preformatted key={ key } area={ area }>{ text }</Preformatted> )}

  </StyledCard>
)};

export default PokeCard;
