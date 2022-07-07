import { THEME          } from "../../theme/themes";
import { useTheme       } from "styled-components";
import { useThemeUpdate } from "../../theme/ThemeContext";

import StyledSection      from "./style";
import Label              from "../Label";

import styled from "styled-components";

const StyledDiv = styled.div`
  background    : ${ ({ theme }) => theme.palette.backgroundDark } ;
  border-radius : 1rem                                             ;
  grid-column   : span 3                                           ;
  height        : 100%                                             ;
  width         : 100%                                             ;
`;

const ThemeSwitch = () => {
  const [theme, themeUpdate] = [ useTheme(), useThemeUpdate() ];

  const themeHandler = ( event: React.ChangeEvent< HTMLInputElement > ) => {
    themeUpdate( +event.target.value );
  }

  return (
  <>
    <StyledSection>
    <Label>THEME</Label>

      {( Object
          .keys( THEME )
          .filter( v => isNaN( +v ) ) as ( keyof typeof THEME )[] )
          .map( t => 
        <div key={ t }>
          <label htmlFor={ t }>{ THEME[t] + 1 }</label>

          <input 
            id={ t }
            type="radio"
            value={ THEME[t] }
            onChange={ themeHandler }
            checked={ theme.id === THEME[t] }
          />

        </div>
      )}

    <StyledDiv />

    </StyledSection>
  </>
)};

export default ThemeSwitch;
