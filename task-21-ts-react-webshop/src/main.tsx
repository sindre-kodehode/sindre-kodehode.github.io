import App               from './App'                ;
import { BrowserRouter } from 'react-router-dom'     ;
import GlobalStyle       from "./theme/GlobalStyles" ;
import { Provider      } from "react-redux"          ;
import ReactDOM          from 'react-dom/client'     ;
import store             from "./store/store"        ;
import { StrictMode    } from "react"                ;

ReactDOM.createRoot( document.getElementById( "root" )! ).render(
  <StrictMode>
    <Provider store={ store }>
      <BrowserRouter basename="/task-21-ts-react-webshop/dist">
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
