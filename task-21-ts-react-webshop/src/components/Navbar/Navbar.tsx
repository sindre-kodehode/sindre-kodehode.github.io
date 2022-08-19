import { CATEGORIES  } from "../../const/categories" ;
import Link            from "../Link"                ;
import { RootState   } from "../../store/store"      ;
import StyledNavbar    from "./Navbar.style"         ;
import { useSelector } from "react-redux"            ;

export default () => {
  const { length: cart } = useSelector( ( { cart }: RootState ) => cart );

  return <StyledNavbar>
    { CATEGORIES.map( category => <Link 
        key={ category.id }
         to={ `/${ category.link }` }>
        { category.text }
      </Link>
    )}

    <Link 
      to={ "/cart" }>
      Cart { cart === 0 ? "" : `(${ cart })` }
    </Link>
  </StyledNavbar>;
};
