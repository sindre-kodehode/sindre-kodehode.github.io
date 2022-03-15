"use strict";

let inputElement;
let metersFeetElement;
let litersGallonsElement;
let kilosPoundsElement;

inputElement = document.getElementById("input");
metersFeetElement = document.getElementById("metersFeet");
litersGallonsElement = document.getElementById("litersGallons");
kilosPoundsElement = document.getElementById("kilosPounds");

function convert() {
  let input = inputElement.value;

  metersFeetElement.textContent =
    input +
    " meters = " +
    (input * 3.28084).toFixed(3) +
    " feet | " +
    input +
    " feet = " +
    (input * 0.3048).toFixed(3) +
    " meters";

  litersGallonsElement.textContent =
    input +
    " liters = " +
    (input * 0.264172).toFixed(3) +
    " gallons | " +
    input +
    " gallons = " +
    (input * 3.785412).toFixed(3) +
    " liters";

  kilosPoundsElement.textContent =
    input +
    " kilos = " +
    (input * 2.20462262185).toFixed(3) +
    " pounds | " +
    input +
    " pounds = " +
    (input * 0.45359237).toFixed(3) +
    " kilos";
};
