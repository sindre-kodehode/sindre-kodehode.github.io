import { useSelector  } from "react-redux";
import { selectDigits } from "../../store/slice";

import StyledOutput     from "./style";

const Display = () =>
<StyledOutput>
  { useSelector( selectDigits ).join("") || "0" }
</StyledOutput>

export default Display;
