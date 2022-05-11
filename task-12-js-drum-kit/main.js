"use strict"


/*******************************************************************************
*  drums:                                                                      * 
*  array of objects describing type of drum and which key to press             *
*******************************************************************************/
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


/*******************************************************************************
*  playDrum:                                                                   *
*  create and play the recieved type of drum                                   * 
*******************************************************************************/
const playDrum = drum => new Audio( `./sound/${drum}.wav` ).play();


/*******************************************************************************
*  loop trough the list of drums                                               *
*******************************************************************************/
drums.forEach( drum => {
  // create new div element
  const element = document.createElement( "div" );

  // add text to the element describing type and wich key to press
  element.textContent = `${drum.type} [${drum.key}]`;

  // listen for a mouseclick and play respective drum
  element.addEventListener( "mousedown", () => playDrum( drum.type ) );

  // append element to page
  document.body.appendChild( element );

  // listen for keypress and play respective drum
  document.addEventListener( "keydown", e => {
    if ( e.key === drum.key ) playDrum( drum.type );
  });
});


/*******************************************************************************
*  an OOP version using a Drum class                                           * 
*  essentially the same as before, but a little neater, perhaps                * 
******************************************************************************** 
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
