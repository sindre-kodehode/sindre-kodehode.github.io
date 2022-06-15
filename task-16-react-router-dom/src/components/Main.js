import styled from "styled-components";

import {
  Routes,
  Route,
} from "react-router-dom";

import { 
  SectionHome,
  SectionOne,
  SectionTwo,
  SectionThree,
} from "./Section";

const StyledMain = styled.main`
  background : #fff ;
  padding    : 32px ;
`;

export default function Main() {
  return (
    <StyledMain>
      <Routes>
        <Route path="/"              element={<SectionHome  />} />
        <Route path="/section-one"   element={<SectionOne   />} />
        <Route path="/section-two"   element={<SectionTwo   />} />
        <Route path="/section-three" element={<SectionThree />} />
      </Routes>
    </StyledMain>
  );
}
