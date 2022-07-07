import Key             from "../Key";
import StyledSection   from "./style";

import { useDispatch } from "react-redux";
import { keys        } from "../../constants/keys";

const Keypad = () => {
  const dispatch = useDispatch();

  return (
    <StyledSection>
      { keys.map( ({ name, action }) =>
        <Key 
          key={ name }
          name={ name }
          onClick={ () => dispatch( action ) }
        /> 
      )}
    </StyledSection>
)};

export default Keypad;
