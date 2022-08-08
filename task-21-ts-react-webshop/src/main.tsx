import App      from './App'
import ReactDOM from 'react-dom/client'

import { GlobalStyle } from "./theme/GlobalStyles";
import { Provider    } from "react-redux";
import { store       } from "./store/store";
import { StrictMode  } from "react";

ReactDOM.createRoot( document.getElementById( "root" )! ).render(
  <StrictMode>
    <Provider store={ store }>
      <GlobalStyle />
      <App />
    </Provider>
  </StrictMode>
);
