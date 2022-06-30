import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    font : {
      fontFamily : string,

      size100?   : string,
      size200?   : string,
      size300?   : string,
      size400?   : string,
      size500?   : string,
      size600?   : string,
      size700?   : string,
      size800?   : string,
      size900?   : string,
    },

    palette : {
      primary     : string,

      neutral100? : string,
      neutral150? : string,
      neutral200? : string,
      neutral300? : string,
      neutral400? : string,
      neutral500? : string,
      neutral600? : string,
      neutral700? : string,
      neutral800? : string,
      neutral900? : string,
    },

    sizing : {
      size100? : string,
      size200? : string,
      size300? : string,
      size400? : string,
      size500? : string,
      size600? : string,
      size700? : string,
      size800? : string,
      size900? : string,
    }
  }
}
