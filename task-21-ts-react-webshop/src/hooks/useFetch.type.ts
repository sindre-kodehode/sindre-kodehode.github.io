import { ProductI  } from "../type/product.type" ;
import { ReactNode } from "react"                ;

export interface useFetchType {
  products  : ProductI[] ,
  isLoading : boolean    ,
  errorMsg  : ReactNode  ,
};
