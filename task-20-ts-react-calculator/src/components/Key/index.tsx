import StyledButton from "./style";
import KeyProps     from "./types";

const Key = ( { name, onClick }: KeyProps  ) =>
  <StyledButton onClick={ onClick }>{ name }</StyledButton>

export default Key;
