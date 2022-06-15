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
        <Route
          path="/task-16-react-router-dom/build"
          element={<SectionHome  />} />
        <Route
          path="/task-16-react-router-dom/build/section-one"
          element={<SectionOne   />} />
        <Route
          path="/task-16-react-router-dom/build/section-two"
          element={<SectionTwo   />} />
        <Route
          path="/task-16-react-router-dom/build/section-three"
          element={<SectionThree />} />
      </Routes>
    </StyledMain>
  );
}
