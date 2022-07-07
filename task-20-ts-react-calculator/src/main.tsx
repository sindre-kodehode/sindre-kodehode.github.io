import App              from "./App";
import ReactDOM         from "react-dom/client";

import { StrictMode   } from "react";
import { Provider     } from "react-redux";
import { store        } from "./store/store";
import { ThemeContext } from "./theme/ThemeContext";
import { GlobalStyle  } from "./theme/GlobalStyles";

ReactDOM.createRoot( document.getElementById( "root" )! ).render(
  <StrictMode>
    <ThemeContext>
      <Provider store={ store }>
        <GlobalStyle />
        <App />
      </Provider>
    </ThemeContext>
  </StrictMode>
);
