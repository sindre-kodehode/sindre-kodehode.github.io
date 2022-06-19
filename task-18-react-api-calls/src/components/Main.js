import { useState, useEffect } from "react";
import styled                  from "styled-components";
import PokeCard                from "./PokeCard";

const StyledMain = styled.main`
  background      : #fff   ;
  display         : flex   ;
  justify-content : center ;
  padding         : 32px   ;
`;

const Main = () => {
  const [ pokeData, setPokeData ] = useState( {} );
  const [ pokeSpec, setPokeSpec ] = useState( {} );

  const fetchPokemon = async () => {
    const pokeId  = Math.floor( Math.random() * 150 ) + 1;
    const baseUrl = "https://pokeapi.co/api/v2/";

    const pokeDataRes = await fetch( `${ baseUrl }pokemon/${ pokeId }`       );
    const pokeSpecRes = await fetch( `${ baseUrl }pokemon-species/${pokeId}` );

    setPokeData( await pokeDataRes.json() );
    setPokeSpec( await pokeSpecRes.json() );
  };

  useEffect( () => { fetchPokemon(); }, [] );

  return (
    <StyledMain>
      <PokeCard data={ pokeData } spec={ pokeSpec } />
    </StyledMain>
  );
}

export default Main;
