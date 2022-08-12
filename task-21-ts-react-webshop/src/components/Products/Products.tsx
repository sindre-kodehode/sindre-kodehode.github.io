import Product            from "../Product/Product";
import StyledProducts     from "./Products.style";
import type ProductsProps from "./Products.type";
import useFetch           from "../../hooks/useFetch";

export default ( { filter }: ProductsProps ) => {
  const { products, isLoading, errorMsg } = useFetch();

  const applyFilter = () => filter 
    ? products.filter( product => product.category === filter )
    : products

  return <StyledProducts>
    { isLoading && <p> Loading... </p> }
    { errorMsg  && <p>{ errorMsg }</p> }

    { products && applyFilter().map( product =>
        <Product product={ product } />
    )}
  </StyledProducts>
};
