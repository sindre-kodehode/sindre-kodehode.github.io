import { useEffect, useState } from "react";

const usePokeFetch = ( url ) => {
  const [ data, setData ] = useState( null );

  const pokeFetch = async () => {
    console.log( "usePokeFetch pokeFetch" );
    const response = await fetch( url );
    setData( await response.json() );
  };

  useEffect( () => {
    console.log( "usePokeFetch useEffect" );
    url && pokeFetch();
  }, [ url ] );

  return { data };
};

export default usePokeFetch;
