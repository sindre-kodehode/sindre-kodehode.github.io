"use strict";
import assert, { strictEqual } from "node:assert";
// 4. EXTRA CREDIT:
//
// (This assignment is not mandatory, only for those who want an extra
// challenge)
//
// Write a function called 'helloChecker' that takes in 1 string as a
// parameter.
//
// Write code that checks all the words in the string if they match the
// word for 'hello' in any of these languages:
//
// hello - english
// ciao  - italian
// salut - french
// hallo - german
// hola  - spanish
// czesc - polish
//
// If any of the words in the string matches any of these, the function
// should return: "HELLO detected in (name of the language)."
//
// If none of the words in the string match any of the words for hello in
// the different languages, your function should return: "No HELLO detected."
//
// PS: Make sure the function is case insensitive, both 'Hello' and 'hello'
// should be detected.
//
// I have provided some string variables to test your function with.

const tests  = [
  [ "Ciao signore!"                  , "HELLO detected in italian." ],
  [ "Puedes decir hola"              , "HELLO detected in spanish." ],
  [ "Halla skjer'a?"                 , "No HELLO detected."         ],
  [ "Salut mon ami"                  , "HELLO detected in french."  ],
  [ "今日は御元気ですか"             , "No HELLO detected."         ],
  [ "Powiedz mi czesc"               , "HELLO detected in polish."  ],
  [ "It's always polite to say hello", "HELLO detected in english." ],
  [ "Sag HALLO zur mir"              , "HELLO detected in german."  ],
];

const helloChecker = [
  str => {
    for ( const word of str.split( " " ) )
      switch ( word.toLowerCase() ) {
        case "hello" : return "HELLO detected in english." ;
        case "ciao"  : return "HELLO detected in italian." ;
        case "salut" : return "HELLO detected in french."  ;
        case "hallo" : return "HELLO detected in german."  ;
        case "hola"  : return "HELLO detected in spanish." ;
        case "czesc" : return "HELLO detected in polish."  ;
      }

    return "No HELLO detected.";
  },

  str => {
    const greetings = [
      [ "english" , "hello" ],
      [ "italian" , "ciao"  ],
      [ "french"  , "salut" ],
      [ "german"  , "hallo" ],
      [ "spanish" , "hola"  ],
      [ "polish"  , "czesc" ],
    ];

    for ( const [ language, word ] of greetings  )
      if ( str.toLowerCase().includes( word ) )
        return `HELLO detected in ${ language }.`

    return "No HELLO detected.";
  },

  str => {
    const words = str.split( " " );

    const greetings = [
      "hello" ,
      "ciao"  ,
      "salut" ,
      "hallo" ,
      "hola"  ,
      "czesc" ,
    ];

    const languages = [
      "english" ,
      "italian" ,
      "french"  ,
      "german"  ,
      "spanish" ,
      "polish"  ,
    ];

    for ( let i = 0; i < words.length; i++ )
      for ( let j = 0; j < greetings.length; j++ )
        if ( words[i].toLowerCase() === greetings[j] )
          return `HELLO detected in ${ languages[j] }.`;

    return "No HELLO detected.";
  },

  str => {
    const greetings = [
      { language : "english" , greeting : "hello" } ,
      { language : "italian" , greeting : "ciao"  } ,
      { language : "french"  , greeting : "salut" } ,
      { language : "german"  , greeting : "hallo" } ,
      { language : "spanish" , greeting : "hola"  } ,
      { language : "polish"  , greeting : "czesc" } ,
    ];

    for ( const hello of greetings )
      if ( str.toLowerCase().includes( hello.greeting ) )
        return `HELLO detected in ${ hello.language }.`

    return "No HELLO detected.";
  },

  str =>
    [
      { language : "english" , greeting : "hello" } ,
      { language : "italian" , greeting : "ciao"  } ,
      { language : "french"  , greeting : "salut" } ,
      { language : "german"  , greeting : "hallo" } ,
      { language : "spanish" , greeting : "hola"  } ,
      { language : "polish"  , greeting : "czesc" } ,
    ]
    .reduce( ( result, { language, greeting } ) =>
      str.toLowerCase().includes( greeting )
        ? `HELLO detected in ${ language }.` 
        : result
    , "No HELLO detected." ),

];

console.log( "-".repeat( 80 ) );

tests.forEach( ([ test, answer ]) => {
  helloChecker.forEach( func => {
    strictEqual( func( test ), answer );
  });
});

console.log( "Success." );
