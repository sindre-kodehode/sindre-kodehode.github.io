import App            from "./App";
import ReactDOM       from "react-dom/client";
import { StrictMode } from "react";

const root = document.getElementById( "root" ) as HTMLElement;

ReactDOM.createRoot( root ).render(
  <StrictMode>
    <App />
  </StrictMode>
);
