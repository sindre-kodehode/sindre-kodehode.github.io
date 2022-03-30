"use strict";

let player = {
  name: "Per",
  chips: 200,
};

let cards = [];

let sum = 0;

let hasBlackJack = false;
let isAlive = false;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomNumber() {
  let randomNumber;
  randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber >= 11) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  let firstCard;
  let secondCard;

  firstCard = getRandomNumber();
  secondCard = getRandomNumber();

  cards = [];
  cards.push(firstCard);
  cards.push(secondCard);

  sum = firstCard + secondCard;

  isAlive = true;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards : ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ", ";
  }

  sumEl.textContent = "Sum : " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum == 21) {
    message = "You've got Blackjack";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (!isAlive || hasBlackJack) {
    return;
  }

  let card;

  card = getRandomNumber();
  cards.push(card);

  sum += card;

  renderGame();
}
