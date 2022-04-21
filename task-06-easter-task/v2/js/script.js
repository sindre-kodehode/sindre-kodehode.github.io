"use strict";


/*******************************************************************************
*  elements from the DOM                                                       *
*******************************************************************************/
const decBtn = document.querySelector( ".dec-btn" );
const incBtn = document.querySelector( ".inc-btn" );
const mainEl = document.querySelector( "main"     );
const numEl  = document.querySelector( "output"   );


/*******************************************************************************
*  listen for clicks on the buttons, increment or decrement accordingly        *
*******************************************************************************/
decBtn.addEventListener("click", () => {
  updateNumber( +( numEl.textContent ) - 1 );
});

incBtn.addEventListener("click", () => {
  updateNumber( +( numEl.textContent ) + 1 );
});


/*******************************************************************************
*  updateNumber:                                                               *
*  checks if the number is divisible by 10, changes the background of the      *
*  main element if so, also updates the text of the number element.            *
*******************************************************************************/
function updateNumber( n ) {
  if ( ( n % 10 ) === 0 ) {
    const maxColor  = 0xffffff;
    const radix     = 16;
    const randColor = Math.floor( Math.random() * maxColor );

    mainEl.style.background = `#${ randColor.toString( radix ) }`;
  }

  numEl.textContent = n;
}
