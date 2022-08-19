import Cart           from "./components/Cart"     ;
import { CATEGORIES } from "./const/categories"    ;
import Navbar         from "./components/Navbar"   ;
import Products       from "./components/Products" ;
import { Route  }     from "react-router-dom"      ;
import { Routes }     from "react-router-dom"      ;

export default () => <>
  <Navbar />
  <Routes>

  { CATEGORIES.map( cat =>
      <Route 
            key={ cat.id }
           path={ `/${ cat.link }` }
        element={ <Products filter={ cat.filter } /> }
      />
  )}

  <Route 
       path={ "/cart" }
    element={ <Cart /> }
  />

  </Routes>
</>;
