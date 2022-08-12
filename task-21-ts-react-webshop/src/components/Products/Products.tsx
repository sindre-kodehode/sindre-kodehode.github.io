import Button             from "../Button";
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

    { products && applyFilter().map( product => {
        const { id, image, title, price } = product;

        return <section key={ id } >
            <img src={ image } alt={ title } />

            <h3>{ title }</h3>

            <p> $ { price } </p>

            <Button product={ product } > buy </Button>
        </section>
      }
    )}
  </StyledProducts>
};
