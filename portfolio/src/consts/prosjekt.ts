import IProject from "../types/project.type";
import nodeIcon from "../assets/node.svg";
import jsIcon   from "../assets/js.svg"

const githubUrl      = "https://github.com/sindre-kodehode/sindre-kodehode.github.io/tree/main/";
const githubPagesUrl = "https://sindre-kodehode.github.io/";
const githubRawUrl   = "https://raw.githubusercontent.com/sindre-kodehode/sindre-kodehode.github.io/main/";

const projects: IProject[] = [
  { id     : 1
  , header : "kodehode"
  , title  : "crud"
  , tags   : [ "nodejs" ]
  , desc   : `Recreation of various unix tools in nodejs`
  , url    : `${ githubUrl }task-22-node-express-crud`
  , image  : nodeIcon 
  },

  { id     : 2
  , header : "kodehode"
  , title  : "webshop"
  , tags   : [ "ts", "js", "html", "css", "react" ]
  , desc   : `Webshop made in React based on Fake Store API`
  , url    : `${ githubPagesUrl }task-21-ts-react-webshop/dist`
  , image  : `${ githubRawUrl }task-21-ts-react-webshop/scrot/webshop-1.png`
  },

  { id     : 3
  , header : "kodehode"
  , title  : "calculator"
  , tags   : [ "ts", "js", "html", "css", "react" ]
  , desc   : `Calculator made in Ract, design from Frontend Mentor`
  , url    : `${ githubPagesUrl }task-20-ts-react-calculator/dist`
  , image  : `${ githubRawUrl }task-20-ts-react-calculator/scrot/calc.png`
  },

  { id     : 4
  , header : "kodehode"
  , title  : "props"
  , tags   : [ "js", "html", "css", "react" ]
  , desc   : `Example of how to use props in React`
  , url    : `${ githubPagesUrl }task-19-ts-react-props/build`
  , image  : `${ githubRawUrl }task-19-ts-react-props/scrots/scrot.png`
  },

  { id     : 5
  , header : "kodehode"
  , title  : "api calls"
  , tags   : [ "js", "html", "css", "react" ]
  , desc   : `Example of how to use api calls inside useEffect in React`
  , url    : `${ githubPagesUrl }task-18-react-api-calls/build`
  , image  : `${ githubRawUrl }task-18-react-api-calls/scrots/scrot.png`
  },

  { id     : 6
  , header : "kodehode"
  , title  : "hooks"
  , tags   : [ "js", "html", "css", "react" ]
  , desc   : `Example of how to use various hooks in React`
  , url    : `${ githubPagesUrl }task-17-react-hooks/build`
  , image  : `${ githubRawUrl }task-17-react-hooks/scrots/scrot.png`
  },

  { id     : 7
  , header : "kodehode"
  , title  : "Router"
  , tags   : [ "js", "html", "css", "react" ]
  , desc   : `Example of how to use React Router DOM`
  , url    : `${ githubPagesUrl }task-16-react-router-dom/build`
  , image  : `${ githubRawUrl }task-16-react-router-dom/scrots/scrot.png`
  },

  { id     : 8
  , header : "kodehode"
  , title  : "Styled"
  , tags   : [ "js", "html", "css", "react" ]
  , desc   : `Example of how to use Styled Components with React`
  , url    : `${ githubPagesUrl }task-15-react-styled-components/build`
  , image  : `${ githubRawUrl }task-15-react-styled-components/scrots/scrot.png`
  },

  { id     : 9
  , header : "kodehode"
  , title  : "imports"
  , tags   : [ "js", "html", "css", "react" ]
  , desc   : `Example of how to use default and named imports`
  , url    : `${ githubPagesUrl }task-14-react-import-export/build`
  , image  : `${ githubRawUrl }task-14-react-import-export/scrots/scrot.png`
  },

  { id     : 10
  , header : "kodehode"
  , title  : "todo"
  , tags   : [ "js", "html", "css" ]
  , desc   : `Todo list app made with JavaScript`
  , url    : `${ githubPagesUrl }task-13-todo-list`
  , image  : `${ githubRawUrl }task-13-todo-list/scrots/scrot.png`
  },

  { id     : 11
  , header : "kodehode"
  , title  : "drumkit"
  , tags   : [ "js", "html", "css" ]
  , desc   : `Drumkit app made with JavaScript`
  , url    : `${ githubPagesUrl }task-12-js-drumkit`
  , image  : `${ githubRawUrl }task-12-js-drumkit/scrots/scrot.png`
  },

  { id     : 12
  , header : "kodehode"
  , title  : "animations"
  , tags   : [ "html", "css" ]
  , desc   : `Example of using animations in CSS`
  , url    : `${ githubPagesUrl }task-11-css-animations`
  , image  : `${ githubRawUrl }task-11-css-animations/scrots/scrot.png`
  },

  { id     : 13
  , header : "kodehode"
  , title  : "loops"
  , tags   : [ "js" ]
  , desc   : `Exercises in using loops and buildt in methods on arrays`
  , url    : `${ githubUrl }task-10-js-arrays-loops-and-methods/main.js`
  , image  : jsIcon
  },

  { id     : 14
  , header : "kodehode"
  , title  : "transitions"
  , tags   : [ "html", "css" ]
  , desc   : `Example of of to use transitions in CSS`
  , url    : `${ githubPagesUrl }task-09-css-transitions`
  , image  : `${ githubRawUrl }task-09-css-transitions/scrots/scrot.png`
  },

  { id     : 15
  , header : "kodehode"
  , title  : "builtins"
  , tags   : [ "js" ]
  , desc   : `Exercises in using buildt in methods for strings and arrays`
  , url    : `${ githubUrl }task-08-js-string-and-array-builtins/main.js`
  , image  : jsIcon
  },

  { id     : 16
  , header : "kodehode"
  , title  : "pseudo"
  , tags   : [ "html", "css" ]
  , desc   : `Example of how to use pseudo elements in CSS`
  , url    : `${ githubPagesUrl }task-07-css-pseudo-elements`
  , image  : `${ githubRawUrl }task-07-css-pseudo-elements/scrots/scrot.png`
  },

  { id     : 17
  , header : "kodehode"
  , title  : "easter"
  , tags   : [ "js", "html", "css" ]
  , desc   : `JavaScript task given to us during easter break`
  , url    : `${ githubPagesUrl }task-06-easter-task/v2`
  , image  : `${ githubPagesUrl }task-06-easter-task/scrots/scrot.png`
  },

  { id     : 18
  , header : "kodehode"
  , title  : "tables"
  , tags   : [ "html", "css" ]
  , desc   : `Example of how to use tabln in HTML`
  , url    : `${ githubPagesUrl }task-05-html-tables`
  , image  : `${ githubRawUrl }task-05-html-tables/scrots/scrot.png`
  },

  { id     : 19
  , header : "kodehode"
  , title  : "parallax"
  , tags   : [ "html", "css" ]
  , desc   : `Example of how to use a background image with fixed attachment
              to create a parallax effect`
  , url    : `${ githubPagesUrl }task-04-css-parallax-website`
  , image  : `${ githubRawUrl }task-04-css-parallax-website/scrots/scrot.png`
  },

  { id     : 20
  , header : "kodehode"
  , title  : "lists"
  , tags   : [ "html", "css" ]
  , desc   : `Example of how to use lists in HTML`
  , url    : `${ githubPagesUrl }task-03-html-lists`
  , image  : `${ githubRawUrl }task-03-html-lists/scrots/scrot.png`
  },

  { id     : 21
  , header : "kodehode"
  , title  : "box model"
  , tags   : [ "html", "css" ]
  , desc   : `Example of how the box model works in HTML`
  , url    : `${ githubPagesUrl }task-02-css-box-model`
  , image  : `${ githubRawUrl }task-02-css-box-model/scrots/scrot.png`
  },

  { id     : 22
  , header : "kodehode"
  , title  : "formating"
  , tags   : [ "html", "css" ]
  , desc   : `Example of how to use various formating tags in HTML`
  , url    : `${ githubPagesUrl }task-01-html-formating`
  , image  : `${ githubRawUrl }task-01-html-formating/scrots/scrot.png`
  },

  { id     : 23
  , header : "scrimba"
  , title  : "travel"
  , tags   : [ "js", "html", "css", "react" ]
  , desc   : `Travel journal`
  , url    : `${ githubPagesUrl }scrimba-08-travel-journal/dist`
  , image  : `${ githubRawUrl }scrimba-08-travel-journal/scrots/scrot.png`
  },

  { id     : 24
  , header : "scrimba"
  , title  : "bussiness"
  , tags   : [ "js", "html", "css", "react" ]
  , desc   : `Business card with theme swithcing`
  , url    : `${ githubPagesUrl }scrimba-07-first-react/dist`
  , image  : `${ githubRawUrl }scrimba-07-first-react/scrots/scrot.png`
  },

  { id     : 25
  , header : "scrimba"
  , title  : "invoice"
  , tags   : [ "js", "html", "css" ]
  , desc   : `Invoice generator`
  , url    : `${ githubPagesUrl }scrimba-06-invoice-generator`
  , image  : `${ githubRawUrl }scrimba-06-invoice-generator/scrots/scrot.png`
  },

  { id     : 26
  , header : "scrimba"
  , title  : "extention"
  , tags   : [ "js", "html", "css" ]
  , desc   : `Chrome extention to keep track of leads`
  , url    : `${ githubUrl }scrimba-05-chrome-extension`
  , image  : `${ githubRawUrl }scrimba-05-chrome-extension/scrots/scrot.png`
  },

  { id     : 27
  , header : "scrimba"
  , title  : "password"
  , tags   : [ "js", "html", "css" ]
  , desc   : `Random password generator`
  , url    : `${ githubPagesUrl }scrimba-04-password-manager`
  , image  : `${ githubRawUrl }scrimba-04-password-manager/scrots/scrot.png`
  },

  { id     : 28
  , header : "scrimba"
  , title  : "black jack"
  , tags   : [ "js", "html", "css" ]
  , desc   : `Simple black jack game`
  , url    : `${ githubPagesUrl }scrimba-03-black-jack-game`
  , image  : `${ githubRawUrl }scrimba-03-black-jack-game/scrots/scrot.png`
  },

  { id     : 29
  , header : "scrimba"
  , title  : "units"
  , tags   : [ "js", "html", "css" ]
  , desc   : `Simple unit conversion app`
  , url    : `${ githubPagesUrl }scrimba-02-unit-conversion`
  , image  : `${ githubRawUrl }scrimba-02-unit-conversion/scrots/scrot.png`
  },

  { id     : 30
  , header : "scrimba"
  , title  : "counter"
  , tags   : [ "js", "html", "css" ]
  , desc   : `Simple passenger counter app`
  , url    : `${ githubPagesUrl }scrimba-01-passenger-counter`
  , image  : `${ githubRawUrl }scrimba-01-passenger-counter/scrots/scrot.png`
  },

  { id     : 31
  , header : "group project"
  , title  : "neptune"
  , tags   : [ "html", "css" ]
  , desc   : `Simple passenger counter app`
  , url    : `${ githubPagesUrl }project-01-neptune`
  , image  : `${ githubRawUrl }project-01-neptune/scrots/scrot.png`
  },

  { id     : 32
  , header : "extra"
  , title  : "react"
  , tags   : [ "js", "html", "css", "react" ]
  , desc   : `Endres React challenge`
  , url    : `${ githubPagesUrl }extra-05-endre-react-challenge/dist`
  , image  : `${ githubRawUrl }extra-05-endre-react-challenge/scrots/scrot.png`
  },

  { id     : 33
  , header : "extra"
  , title  : "pokeapi"
  , tags   : [ "js", "html", "css" ]
  , desc   : `Display a random pokémon fetched from an api`
  , url    : `${ githubPagesUrl }extra-04-pokeapi`
  , image  : `${ githubRawUrl }extra-04-pokeapi/scrots/scrot.png`
  },

  { id     : 34
  , header : "extra"
  , title  : "edabit"
  , tags   : [ "js" ]
  , desc   : `Various challenges from edabit`
  , url    : `${ githubUrl }extra-03-edabit`
  , image  : jsIcon
  },

  { id     : 35
  , header : "extra"
  , title  : "nrk"
  , tags   : [ "js", "html", "css" ]
  , desc   : `Newsfeed from NRK`
  , url    : `${ githubPagesUrl }extra-02-nrk-newsfeed`
  , image  : `${ githubRawUrl }extra-02-nrk-newsfeed/scrots/scrot.png`
  },

  { id     : 36
  , header : "extra"
  , title  : "tip"
  , tags   : [ "js", "html", "css" ]
  , desc   : `Simple tip calculator app`
  , url    : `${ githubPagesUrl }extra-01-tip-calculator-app-main`
  , image  : `${ githubRawUrl }extra-01-tip-calculator-app-main/scrots/scrot.png`
  },

  { id     : 37
  , header : "extra"
  , title  : "endre"
  , tags   : [ "js" ]
  , desc   : `Various JavaScript challenges from Endre`
  , url    : `${ githubUrl }extra-00-endre`
  , image  : jsIcon
  },
];

export default projects;
