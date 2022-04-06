let pass1El  = document.getElementById('password1');
let pass2El  = document.getElementById('password2');
let pass3El  = document.getElementById('password3');
let pass4El  = document.getElementById('password4');

let outputEl = document.getElementById('length-output');
let inputEl  = document.getElementById('length-input');

let generateButton = document.getElementById('generate-button');

inputEl.addEventListener('input', updateLength);
generateButton.addEventListener('click', generatePassword);


let legalChars = "";
legalChars    += "0123456789";
legalChars    += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
legalChars    += "abcdefghijklmnopqrstuvwxyz";
legalChars    += "!\"#$%&/'()*+,-./:;<=>?@[\\]^_`{|}~";

function generatePassword() {
  const passLength = inputEl.value;

  pass1El.value = getPassString(passLength);
  pass2El.value = getPassString(passLength);
  pass3El.value = getPassString(passLength);
  pass4El.value = getPassString(passLength);
};

function updateLength() {
  outputEl.value = inputEl.value;
};

function copyToClipboard(clickedField) {
  navigator.clipboard.writeText(clickedField.value);
  clickedField.value = 'copied';
};

function getPassString(numChar) {
  let passString = "";

  for(let i = 0; i < numChar; i++) {
    passString += getRandomChar(legalChars);
  }

  return passString;
};

function getRandomChar(chars) {
  return chars.charAt(Math.floor(Math.random() * chars.length)); 
};
