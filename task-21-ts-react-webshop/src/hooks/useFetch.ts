import { ProductType } from "../store/store";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [ products , setProducts  ] = useState< ProductType[] >( [] );
  const [ isLoading, setIsloading ] = useState< boolean >( false );
  const [ errorMsg , setErrorMsg  ] = useState< string >( "" );

  const fetchProducts = async () => {
    setIsloading( true );

    try {
      const res  = await fetch( "https://fakestoreapi.com/products" );
      const data = await res.json();
      setProducts( data );

    } catch ( err ) {
      err instanceof Error && setErrorMsg( err.message );

    } finally {
      setIsloading( false );
    }
  }

  useEffect( () => { fetchProducts() }, [] );
  
  return {
    products  : products,
    isLoading : isLoading,
    errorMsg  : errorMsg,
  }
};

export default useFetch;
