import App            from './App'
import GlobalStyle    from "./themes/GlobalStyles";
import ReactDOM       from 'react-dom/client'
import ThemeProvider  from "./themes/ThemeProvider";

import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
