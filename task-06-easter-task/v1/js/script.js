"use strict";

const ellipse1El  = document.querySelector( ".Ellipse-1"   );
const ellipse2El  = document.querySelector( ".Ellipse-2"   );
const line1El     = document.querySelector( ".Line-1"      );
const line2El     = document.querySelector( ".Line-2"      );
const line3El     = document.querySelector( ".Line-3"      );
const rectangleEl = document.querySelector( ".Rectangle-1" );
const text4El     = document.querySelector( ".Text-4"      );

ellipse2El.addEventListener( "click", incNumber );
line1El.addEventListener(    "click", incNumber );
line2El.addEventListener(    "click", incNumber );

ellipse1El.addEventListener( "click", decNumber );
line3El.addEventListener(    "click", decNumber );


function getNumber() {
  return Number( text4El.textContent );
}

function incNumber() {
  updateNumber( getNumber() + 1 );
}

function decNumber() {
  updateNumber( getNumber() - 1 );
}

function updateNumber( n ) {
  if ( ( n % 10 ) === 0 ) {
    const maxColor  = 0xffffff;
    const radix     = 16;
    const randColor = Math.floor( Math.random() * maxColor );

    rectangleEl.style.background = `#${ randColor.toString( radix ) }`;
  }

  text4El.textContent = n;
}
