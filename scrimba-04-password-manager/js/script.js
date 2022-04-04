let pass1El  = document.getElementById('password1');
let pass2El  = document.getElementById('password2');
let pass3El  = document.getElementById('password3');
let pass4El  = document.getElementById('password4');
let outputEl = document.getElementById('length-output');
let inputEl  = document.getElementById('length-input');

let chars = [
  "!", '"', "#", "$", "%", "&", "/", "'", "(", ")", "*", "+", ",", "-", ".",
  "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=",
  ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[",
  "'", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i",
  "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
  "y", "z", "{", "|", "}", "~",
];

function getPassString(numChar) {
  let passString = "";

  for(let i = 0; i < numChar; i++) {
    passString += chars[Math.floor(Math.random() * 95)];
  }

  return passString;
};

function generatePassword() {
  let passLength = inputEl.value;

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
