import { ButtonProps } from "./Button.type"  ;
import StyledButton    from "./Button.style" ;
import { useDispatch } from "react-redux"    ;

export default ( { action, text }: ButtonProps ) => {
  const dispatch = useDispatch();

  return <StyledButton
    onClick={ () => dispatch( action ) }>
    { text }
  </StyledButton>;
};
