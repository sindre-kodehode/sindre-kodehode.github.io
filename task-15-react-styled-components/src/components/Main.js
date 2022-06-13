import styled from "styled-components";

import { 
  SectionOne,
  SectionTwo,
  SectionThree,
} from "./Section";

export const StyledMain = styled.main`
  background : #fff ;
  columns    : 3    ;
  gap        : 32px ;
  padding    : 64px ;
`;

export default function Main() {
  return (
    <StyledMain>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </StyledMain>
  );
}
