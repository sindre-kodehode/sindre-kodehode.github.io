"use strict"

const drums = [
  { type : "clap"    , key : "s" , },
  { type : "hihat"   , key : "d" , },
  { type : "kick"    , key : "f" , },
  { type : "openhat" , key : "g" , },
  { type : "ride"    , key : "h" , },
  { type : "snare"   , key : "j" , },
  { type : "tink"    , key : "k" , },
  { type : "tom"     , key : "l" , },
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
