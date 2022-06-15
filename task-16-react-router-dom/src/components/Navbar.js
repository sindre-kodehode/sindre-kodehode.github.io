import styled from "styled-components";
import Icon   from "./Icon";
import Link   from "./Link";

const StyledNav = styled.nav`
  align-items : center  ;
  background  : #20232a ;
  display     : flex    ;
  gap         : 16px    ;
  height      : 64px    ;
  padding     : 0 32px  ;
`;

const links = [
  { path : "/task-16-react-router-dom/build/section-one"  , children : "Section One"   },
  { path : "/task-16-react-router-dom/build/section-two"  , children : "Section Two"   },
  { path : "/task-16-react-router-dom/build/section-three", children : "Section Three" },
];

export default function Navbar() {
  return (
    <StyledNav>

      <Link to="/task-16-react-router-dom/build/"> <Icon react medium /> </Link>

      { links.map( ( { path, children }, index ) => 
        <Link nav={ "true" } key={ index } to={ path }>{ children }</Link>
      )}
    </StyledNav>
  );
}
