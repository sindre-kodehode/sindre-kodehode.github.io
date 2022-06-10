import React    from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const Navbar = () => {
  return (
    <nav>
      <h1>This is navbar</h1>
    </nav>
  );
};

const Header = () => {
  return (
    <header>
      <h1>This is header</h1>
    </header>
  );
};

const Main = () => {
  return (
    <main>
      <h1>This is main</h1>
    </main>
  );
};

const Footer = () => {
  return (
    <footer>
      <h1>This is footer</h1>
    </footer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);
