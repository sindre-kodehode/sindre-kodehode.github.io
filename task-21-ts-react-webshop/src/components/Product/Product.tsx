import { addToCart    } from "../../store/cartSlice" ;
import Button           from "../Button"             ;
import Image            from "../Image"              ;
import Price            from "../Price"              ;
import { ProductProps } from "./Product.type"        ;
import StyledProduct    from "./Product.style"       ;
import Title            from "../Title"              ;

export default ( { product }: ProductProps ) => { 
  const { id, image, title, price } = product;

  return <StyledProduct key={ id } >
    <Title title={ title } />
    <Image src={ image } alt={ title } />
    <Price price={ price } />
    <Button action={ addToCart( product ) } text="buy" />
  </StyledProduct>
};
