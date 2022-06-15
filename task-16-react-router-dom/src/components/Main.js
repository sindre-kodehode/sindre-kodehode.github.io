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

const routes = [{
    path    : "/task-16-react-router-dom/build",
    element : <SectionHome />
  }, { 
    path    : "/task-16-react-router-dom/build/section-one",
    element : <SectionOne />
  }, { 
    path    : "/task-16-react-router-dom/build/section-two",
    element : <SectionTwo />
  }, { 
    path    : "/task-16-react-router-dom/build/section-three",
    element : <SectionThree />
},];

export default function Main() {
  return (
    <StyledMain>
      <Routes>
        { routes.map( ({ path, element }) => 
          <Route path={ path } element={ element } />
        )}
      </Routes>
    </StyledMain>
  );
}
