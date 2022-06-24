import { useState, useEffect } from "react";
import styled                  from "styled-components";
import PokeCard                from "./PokeCard";
import PokeButton              from "./PokeButton";

const StyledMain = styled.main`
  background      : #fff   ;
  display         : flex   ;
  justify-content : center ;
  padding         : 32px   ;
  gap: 64px;
`;

const Main = () => {
  const [ pokeId  , setPokeId   ]   = useState( Math.floor( Math.random() * 150 ) + 1 );
  const [ pokeData, setPokeData ]   = useState( {} );
  const [ isLoading, setIsLoading ] = useState( false );

  const pokeFetch = async ( signal ) => {
    try {
      setIsLoading( true );
      const baseUrl = "https://pokeapi.co/api/v2/";

      const dataEndpoint = "pokemon/";
      const specEndpoint = "pokemon-species/";

      const pokeDataRes = await fetch( `${ baseUrl }${ dataEndpoint }${ pokeId }`, signal );
      const pokeSpecRes = await fetch( `${ baseUrl }${ specEndpoint }${ pokeId }`, signal );

      setPokeData({ 
        ...await pokeDataRes.json(),
        ...await pokeSpecRes.json()
      });
      setIsLoading( false );
    } 
    catch ({ name }) {
      setPokeData({ error : name })
      setIsLoading( false );
    }
  };

  useEffect( () => {
    const controller = new AbortController();
    const signal     = controller.signal;

    if ( pokeId ) {
      setIsLoading( true );
      setTimeout( () => pokeFetch( signal ), 500 );
    }

    return () => controller.abort();
  }, [ pokeId ] );

  return (
    <StyledMain>
      <PokeCard data={ pokeData } />
      <PokeButton 
        onClick={ () => {
        setPokeId( Math.floor( Math.random() * 150 ) + 1 );
      }}
        disabled={ isLoading }
      >
      { isLoading ? "loading." : "load new" }
      </PokeButton>
    </StyledMain>
  );
}

export default Main;
