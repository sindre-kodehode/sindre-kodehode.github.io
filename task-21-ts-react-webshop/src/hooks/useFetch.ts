import localProducts    from "../const/prducts.json" ;
import { useEffect    } from "react"                 ;
import { useFetchType } from "./useFetch.type"       ;
import { useState     } from "react"                 ;

export default () => {
  const [ fetchState, setFetchState ] = useState< useFetchType >( {
    products  : []    ,
    isLoading : false ,
    errorMsg  : ""    ,
  })

  const fetchProducts = async () => {
    setFetchState( {
      products  : []   ,
      isLoading : true ,
      errorMsg  : ""   ,
    })

    try {
      const res  = await fetch( "https://fakestoreapi.com/products" );
      const data = await res.json();

      setFetchState( {
        products  : data  ,
        isLoading : false ,
        errorMsg  : ""    ,
      });

    } catch ( err ) {
      err instanceof Error && setFetchState( {
        products  : localProducts                                ,
        isLoading : false                                        ,
        errorMsg  : `${ err.message } Using local copy instead.` ,
      });
    }
  }

  useEffect( () => { fetchProducts() }, [] );
  
  return fetchState;
};
