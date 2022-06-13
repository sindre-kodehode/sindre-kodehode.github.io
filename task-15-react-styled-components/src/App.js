import { createGlobalStyle } from 'styled-components';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main   from "./components/Main";
import Footer from "./components/Footer";

export const GlobalStyles = createGlobalStyle`
  * {
    margin  : 0 ;
    padding : 0 ;
  }
  
  body {
    background : #20232a ;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>
  )
}
