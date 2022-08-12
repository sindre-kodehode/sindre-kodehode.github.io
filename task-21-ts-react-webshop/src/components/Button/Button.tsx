import { addToCart   } from "../../store/cartSlice";
import { ProductType } from "../../store/store";
import { ReactNode   } from "react";
import StyledButton    from "./Button.style";
import { useDispatch } from "react-redux";

type ButtonProps = {
  product  : ProductType,
  children : ReactNode,
};

export default ( { product, children }: ButtonProps ) => {
  const dispatch = useDispatch();

  return <StyledButton
    onClick={ () => dispatch( addToCart( product ) ) }>
    { children }
  </StyledButton>;
};
