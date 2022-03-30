"use strict";

let count;
let entries;
let countElement;
let saveElement;

count = 0;
entries = "";
countElement = document.getElementById("count-element");
saveElement = document.getElementById("save-element");

function increment() {
  countElement.textContent = ++count;
}

function save() {
  saveElement.textContent += " " + count + " -";
  countElement.textContent = count = 0;
}
