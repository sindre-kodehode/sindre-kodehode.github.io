import Cart           from "./components/Cart";
import Navbar         from "./components/Navbar";
import Products       from "./components/Products";

import { CATEGORIES } from "./const/categories";
import { Route  }     from "react-router-dom";
import { Routes }     from "react-router-dom";

export default () => <>
  <Navbar />
  <Routes>

  { CATEGORIES.map( cat =>
      <Route 
        key={ cat.id }
        path={`/task-21-ts-react-webshop/dist/${ cat.link }`}
        element={ <Products filter={ cat.filter } /> }
      />
  )}

  <Route 
    path={"/task-21-ts-react-webshop/dist/cart"}
    element={ <Cart /> }
  />

  </Routes>
</>;
