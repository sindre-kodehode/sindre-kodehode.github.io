"use strict"

const pokeNo = Math.floor( Math.random() * 149 );

const pokeReq     = new Request( `https://pokeapi.co/api/v2/pokemon/${pokeNo}` );
const pokeSpecReq = new Request( `https://pokeapi.co/api/v2/pokemon-species/${pokeNo}` );

const pokeDataEl   = document.querySelector( ".poke-data" );
const pokeSpriteEl = document.querySelector( ".poke-sprite" );
const pokeNumEl    = document.querySelector( ".poke-number" );
const pokeDescEl   = document.querySelector( ".poke-desc" );

const pokeFetch = async () => {
  const pokeRes  = await fetch( pokeReq );
  const pokeData = await pokeRes.json(); 

  pokeNumEl.textContent = `No.${pokeData.id.toString().padStart( 3, "0" )}`;

  pokeDataEl.textContent  = `\n${pokeData.name.toUpperCase()}\n\n`;
  pokeDataEl.textContent += `\nHT  ${pokeData.height}"\n`;
  pokeDataEl.textContent += `\nWT  ${pokeData.weight}lb\n`;

  pokeSpriteEl.src = pokeData.sprites.versions["generation-i"]["red-blue"]["front_default"];

  const pokeSpecRes  = await fetch( pokeSpecReq );
  const pokeSpecData = await pokeSpecRes.json();

  pokeDescEl.textContent = pokeSpecData.flavor_text_entries[0].flavor_text.split("\u000c")[0].replaceAll("\n", "\n\n");
};

pokeFetch();

