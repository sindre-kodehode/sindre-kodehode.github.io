import type ProductsProps from "./Products.type";

import { addToCart   } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

import useFetch        from "../../hooks/useFetch";

import StyledProducts from "./Products.style";

const Products = ( { filter }: ProductsProps ) => {
  const { products, isLoading, errorMsg } = useFetch();
  const dispatch = useDispatch();

  const applyFilter = () => filter 
    ? products.filter( product => product.category === filter )
    : products

  return (
    <StyledProducts>
      { isLoading && <p> Loading... </p> }
      { errorMsg  && <p>{ errorMsg }</p> }

      { products && applyFilter().map( product =>
        <section key={ product.id } >
          <img src={ product.image } alt={ product.title } />
          <h3>{ product.title }</h3>
          <p>{ `$ ${ product.price }` }</p>
          <button onClick={ () => dispatch( addToCart( product ) ) }> buy </button>
        </section>
      )}
    </StyledProducts>
  )
}

export default Products;
