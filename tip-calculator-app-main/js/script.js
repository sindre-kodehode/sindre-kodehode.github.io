"use strict";

let bill = 0;
let tipPercent = 0;
let numPeople = 0;

let tip = 0;
let amount = 0;
let total = 0;

let billIsValid = false;
let tipIsValid = false;
let peopleIsValid = false;

const billEl = document.getElementById("bill-el");
const customEl = document.getElementById("custom-el");
const peopleEl = document.getElementById("people-el");
const amountEl = document.getElementById("amount-el");
const totalEl = document.getElementById("total-el");

const tip5Btn = document.getElementById("tip5-btn");
const tip10Btn = document.getElementById("tip10-btn");
const tip15Btn = document.getElementById("tip15-btn");
const tip25Btn = document.getElementById("tip25-btn");
const tip50Btn = document.getElementById("tip50-btn");
const resetBtn = document.getElementById("reset-btn");

const errorBill = document.getElementById("error-bill");
const errorTip = document.getElementById("error-tip");
const errorPeople = document.getElementById("error-people");

billEl.addEventListener("keyup", validateBill);
customEl.addEventListener("keyup", validateCustomTip);
peopleEl.addEventListener("keyup", validateNumPeople);

tip5Btn.addEventListener("click", function () {
  handleButtons(tip5Btn, 5);
});
tip10Btn.addEventListener("click", function () {
  handleButtons(tip10Btn, 10);
});
tip15Btn.addEventListener("click", function () {
  handleButtons(tip15Btn, 15);
});
tip25Btn.addEventListener("click", function () {
  handleButtons(tip25Btn, 25);
});
tip50Btn.addEventListener("click", function () {
  handleButtons(tip50Btn, 50);
});
resetBtn.addEventListener("click", resetFields);

function renderResult() {
  resetBtn.removeAttribute("disabled");

  if (!billIsValid) {
    amountEl.textContent = "$0.00";
    totalEl.textContent = "$0.00";
    return;
  }

  if (!tipIsValid) {
    amountEl.textContent = "$0.00";
    totalEl.textContent = "$0.00";
    return;
  }

  if (!peopleIsValid) {
    amountEl.textContent = "$0.00";
    totalEl.textContent = "$0.00";
    return;
  }

  tip = bill * tipPercent * 0.01;
  amount = tip / numPeople;
  total = (bill + tip) / numPeople;

  amountEl.textContent = `\$${amount.toFixed(2)}`;
  totalEl.textContent = `\$${total.toFixed(2)}`;
}

function resetFields() {
  billEl.value = "";
  errorBill.textContent = "";
  billEl.style.outline = "none";

  customEl.value = "";
  errorTip.textContent = "";
  customEl.style.outline = "none";

  peopleEl.value = "";
  errorPeople.textContent = "";
  peopleEl.style.outline = "none";

  amountEl.textContent = "$0.00";
  totalEl.textContent = "$0.00";

  resetBtn.setAttribute("disabled", "");
  clearButtons();
}

function validateBill() {
  let text = "";
  let outline = false;
  billIsValid = true;

  if (billEl.value === "") {
    billIsValid = false;
  } else {
    bill = parseFloat(billEl.value);
    bill = Math.abs(bill);

    if (bill === 0) {
      text = "Can't be zero";
      outline = true;
      billIsValid = false;
    }

    if (isNaN(bill)) {
      text = "Not a number";
      outline = true;
      billIsValid = false;
    }
  }

  billEl.style.outline = outline ? "0.15em solid hsl(11, 52%, 60%)" : "none";
  errorBill.textContent = text;
  renderResult();
}

function validateNumPeople() {
  let text = "";
  let outline = false;
  peopleIsValid = true;

  if (peopleEl.value === "") {
    peopleIsValid = false;
  } else {
    numPeople = parseFloat(peopleEl.value);
    numPeople = Math.abs(numPeople);

    if (numPeople === 0) {
      text = "Can't be zero";
      outline = true;
      peopleIsValid = false;
    }

    if (isNaN(numPeople)) {
      text = "Not a number";
      outline = true;
      peopleIsValid = false;
    }
  }

  peopleEl.style.outline = outline ? "0.15em solid hsl(11, 52%, 60%)" : "none";
  errorPeople.textContent = text;
  renderResult();
}

function validateCustomTip() {
  clearButtons();
  let text = "";
  let outline = false;
  tipIsValid = true;

  if (customEl.value === "") {
    tipIsValid = false;
  } else {
    tipPercent = parseFloat(customEl.value);
    tipPercent = Math.abs(tipPercent);

    if (tipPercent === 0) {
      text = "Can't be zero";
      outline = true;
      tipIsValid = false;
    }

    if (isNaN(tipPercent)) {
      text = "Not a number";
      outline = true;
      tipIsValid = false;
    }
  }

  customEl.style.outline = outline ? "0.15em solid hsl(11, 52%, 60%)" : "none";
  errorTip.textContent = text;
  renderResult();
}

function handleButtons(button, percent) {
  tipIsValid = true;
  clearButtons();
  button.style.background = "hsl(172, 67%, 45%)";
  button.style.color = "hsl(183, 100%, 15%)";
  tipPercent = percent;
  customEl.value = "";
  errorTip.textContent = "";
  customEl.style.outline = "none";
  renderResult();
}

function clearButtons() {
  tip5Btn.style.background = "hsl(183, 100%, 15%)";
  tip5Btn.style.color = "hsl(0, 0%, 100%)";
  tip10Btn.style.background = "hsl(183, 100%, 15%)";
  tip10Btn.style.color = "hsl(0, 0%, 100%)";
  tip15Btn.style.background = "hsl(183, 100%, 15%)";
  tip15Btn.style.color = "hsl(0, 0%, 100%)";
  tip25Btn.style.background = "hsl(183, 100%, 15%)";
  tip25Btn.style.color = "hsl(0, 0%, 100%)";
  tip50Btn.style.background = "hsl(183, 100%, 15%)";
  tip50Btn.style.color = "hsl(0, 0%, 100%)";
}
