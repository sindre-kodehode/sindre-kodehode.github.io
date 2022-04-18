"use strict";

const decBtn = document.querySelector( ".dec-btn" );
const incBtn = document.querySelector( ".inc-btn" );
const mainEl = document.querySelector( "main"     );
const numEl  = document.querySelector( "output"   );

decBtn.addEventListener( "click", () => { updateNumber( getNumber() - 1 ); });
incBtn.addEventListener( "click", () => { updateNumber( getNumber() + 1 ); });

function getNumber() { return Number( numEl.textContent ); }

function updateNumber( n ) {
  if ( ( n % 10 ) === 0 ) {
    const maxColor  = 0xffffff;
    const radix     = 16;
    const randColor = Math.floor( Math.random() * maxColor );

    mainEl.style.background = `#${ randColor.toString( radix ) }`;
  }

  numEl.textContent = n;
}
