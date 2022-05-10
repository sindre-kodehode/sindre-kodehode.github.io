"use strict"

const drums = [
  { type : "clap"    , key : "a" , },
  { type : "hihat"   , key : "s" , },
  { type : "kick"    , key : "d" , },
  { type : "openhat" , key : "f" , },
  { type : "ride"    , key : "j" , },
  { type : "snare"   , key : "k" , },
  { type : "tink"    , key : "l" , },
  { type : "tom"     , key : ";" , },
];

const playDrum = drum => new Audio( `./sound/${drum}.wav` ).play();

drums.forEach( drum => {
  const element = document.createElement( "div" );

  element.textContent = drum.type;
  document.body.appendChild( element );

  element.addEventListener( "mousedown", () => playDrum( drum.type ) );

  document.addEventListener( "keydown", e => {
    if ( e.key === drum.key ) playDrum( drum.type );
  });
});
