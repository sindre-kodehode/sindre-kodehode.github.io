import StyledLabel from "./style";
import LabelProp   from "./types";

const Label = ({ children }: LabelProp ) =>
<StyledLabel>
  { children }
</StyledLabel>

export default Label;
