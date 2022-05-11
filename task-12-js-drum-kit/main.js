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

  element.textContent = `${drum.type} [${drum.key}]`;
  element.addEventListener( "mousedown", () => playDrum( drum.type ) );

  document.body.appendChild( element );
  document.addEventListener( "keydown", e => {
    if ( e.key === drum.key ) playDrum( drum.type );
  });
});

/*******************************************************************************
* class Drum {                                                                 * 
*   constructor( type, key ) {                                                 * 
*     this.type = type;                                                        * 
*     this.key  = key;                                                         * 
*                                                                              * 
*     this.element = document.createElement( "div" );                          * 
*     this.element.textContent = `${drum.type} [${drum.key}]`;                 * 
*     this.element.addEventListener( "mousedown", () => this.play() );         * 
*                                                                              * 
*     document.body.appendChild( this.element );                               * 
*     document.addEventListener( "keydown", e => {                             * 
*       if ( e.key === this.key ) this.play();                                 * 
*     });                                                                      * 
*   }                                                                          * 
*                                                                              * 
*   play() { new Audio( `./sound/${this.type}.wav` ).play(); }                 * 
* }                                                                            * 
*                                                                              * 
* new Drum( "clap"    , "s" );                                                 * 
* new Drum( "hihat"   , "d" );                                                 * 
* new Drum( "kick"    , "f" );                                                 * 
* new Drum( "openhat" , "g" );                                                 * 
* new Drum( "ride"    , "h" );                                                 * 
* new Drum( "snare"   , "j" );                                                 * 
* new Drum( "tink"    , "k" );                                                 * 
* new Drum( "tom"     , "l" );                                                 * 
*******************************************************************************/
