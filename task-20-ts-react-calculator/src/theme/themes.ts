import { DefaultTheme } from "styled-components";

enum THEME {
  THEME1,
  THEME2,
  THEME3,
};

const defaultTheme: DefaultTheme = {
  id : THEME.THEME1,
  font : {
    fontFamily : "League Spartan",
  },

  palette : {
    primaryBackground   : "#d03f2f",
    primaryShadow       : "#93261a",
    primaryHover        : "#f96c5b",

    secondaryBackground : "#637097",
    secondaryShadow     : "#404e72",
    secondaryHover      : "#a2b3e1",

    tertiaryBackground  : "#eae3dc",
    tertiaryShadow      : "#b4a597",
    tertiaryHover       : "#ffffff",

    background          : "#232c43",
    backgroundDark      : "#182034",
    backgroundLight     : "#3a4764",

    textDark            : "#444b5a",
    textLight           : "#ffffff",
  },
}

const themes: DefaultTheme[] = [
  {
    ...defaultTheme,
  }, {
    ...defaultTheme,
    id : THEME.THEME2,
    palette : {
      primaryBackground   : "#ca5502",
      primaryShadow       : "#893901",
      primaryHover        : "#ff8b38",

      secondaryBackground : "#378288",
      secondaryShadow     : "#1b5f65",
      secondaryHover      : "#62b5bd",

      tertiaryBackground  : "#e4e3e1",
      tertiaryShadow      : "#a69d91",
      tertiaryHover       : "#ffffff",

      background          : "#e6e6e6",
      backgroundDark      : "#d1cccc",
      backgroundLight     : "#ededed",

      textDark            : "#35352c",
      textLight           : "#ffffff",
    },
  }, {
    ...defaultTheme,
    id : THEME.THEME3,
    palette : {
      primaryBackground   : "#00e0d1",
      primaryShadow       : "#6cf9f2",
      primaryHover        : "#94fff9",

      secondaryBackground : "#58077d",
      secondaryShadow     : "#8631b0",
      secondaryHover      : "#bc15f4",

      tertiaryBackground  : "#871c9c",
      tertiaryShadow      : "#341c4f",
      tertiaryHover       : "#6b34ac",

      background          : "#160628",
      backgroundDark      : "#160628",
      backgroundLight     : "#1d0934",

      textDark            : "#1b2428",
      textLight           : "#ffffff",
    },
  },
];

export { themes, THEME };
