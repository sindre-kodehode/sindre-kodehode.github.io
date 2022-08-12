import App               from './App'
import GlobalStyle       from "./theme/GlobalStyles";
import ReactDOM          from 'react-dom/client'
import store             from "./store/store";

import { BrowserRouter } from 'react-router-dom';
import { Provider      } from "react-redux";
import { StrictMode    } from "react";

ReactDOM.createRoot( document.getElementById( "root" )! ).render(
  <StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
