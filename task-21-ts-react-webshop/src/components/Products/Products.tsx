import Banner            from "../Banner"            ;
import Product           from "../Product/Product"   ;
import { ProductsProps } from "./Products.type"      ;
import StyledProducts    from "./Products.style"     ;
import useFetch          from "../../hooks/useFetch" ;

export default ( { filter }: ProductsProps ) => {
  const { products, isLoading, errorMsg } = useFetch();

  const applyFilter = () => filter 
    ? products.filter( product => product.category === filter )
    : products

  return <>
    { errorMsg  && <Banner error> <h4>{ errorMsg }</h4> </Banner> }
    { isLoading && <Banner      > <h4>  Loading...</h4> </Banner> }

    <StyledProducts>
      { products && applyFilter().map( product =>
          <Product product={ product } />
      )}
    </StyledProducts>
  </>
};
