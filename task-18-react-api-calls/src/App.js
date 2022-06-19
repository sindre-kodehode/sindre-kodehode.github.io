import { createGlobalStyle } from "styled-components";
import Navbar                from "./components/Navbar";
import Header                from "./components/Header";
import Main                  from "./components/Main";
import Footer                from "./components/Footer";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing : border-box ;
    margin     : 0          ;
    padding    : 0          ;
  }
  
  body {
    background : #20232a ;
  }
`;

const App = () =>
  <>
    <GlobalStyles />
    <Navbar       />
    <Header       />
    <Main         />
    <Footer       />
  </>

export default App;
