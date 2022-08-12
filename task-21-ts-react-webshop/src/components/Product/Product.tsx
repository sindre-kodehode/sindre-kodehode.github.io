import Button           from "../Button";
import StyledProduct    from "./Product.style";

import { ProductProps } from "./Product.type"

export default ( { product }: ProductProps ) => { 
  const { id, image, title, price } = product;

  return <StyledProduct key={ id } >
    <h3>{ title }</h3>

    <picture>
      <img src={ image } alt={ title } />
    </picture>

    <p> $ { price } </p>

    <Button product={ product } > buy </Button>
  </StyledProduct>
};
