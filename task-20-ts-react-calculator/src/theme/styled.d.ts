import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    id : number,
    font : {
      fontFamily : string,
    },

    palette : {
      primaryBackground   : string,
      primaryShadow       : string,
      primaryHover        : string,

      secondaryBackground : string,
      secondaryShadow     : string,
      secondaryHover      : string,

      tertiaryBackground  : string,
      tertiaryShadow      : string,
      tertiaryHover       : string,

      background          : string,
      backgroundDark      : string,
      backgroundLight     : string,

      textDark            : string,
      textLight           : string,
    },
  }
}
