"use strict";

//Elementos

const selectOptionElements = document.querySelector(".js-select");
const inputBtnElement = document.querySelector(".js-input");
const textGoElement = document.querySelector(".js-start");
const textPlayerElement = document.querySelector(".js_cont_player");
const textComputerElement = document.querySelector(".js_cont_computer");
const userValue = selectOptionElements.value;
const resetElement = document.querySelector(".js-reset");

//variables globales.
let countUser = 0;
let countComputer = 0;
let count = 0;

//function
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function getValueComputer() {
  let randomNumber = getRandomNumber(10);
  let moveComputer = "";
  if (randomNumber < 3) {
    moveComputer = "piedra";
  } else if (randomNumber >= 6) {
    moveComputer = "tijera";
  } else {
    moveComputer = "papel";
  }
  return moveComputer;
}

function getValueUser() {
  const valueUser = selectOptionElements.value;
  return valueUser;
}
function getResultComparing() {
  let moveComputer = getValueComputer();
  let moveUser = getValueUser();
  count++;
  if (moveComputer === moveUser) {
    textGoElement.innerHTML = "Empate";
  } else if (moveUser === "piedra") {
    if (moveComputer === "tijera") {
      textGoElement.innerHTML = "Has ganado";
      countUser++;
    } else if (moveComputer === "papel") {
      textGoElement.innerHTML = "Has perdido";
      countComputer++;
    }
  } else if (moveUser === "tijera") {
    if (moveComputer === "papel") {
      textGoElement.innerHTML = "Has ganado";
      countUser++;
    } else if (moveComputer === "piedra") {
      textGoElement.innerHTML = "Has perdido";
      countComputer++;
    }
  } else if (moveUser === "papel") {
    if (moveComputer === "piedra") {
      textGoElement.innerHTML = "Has ganado";
      countUser++;
    } else if (moveComputer === "tijera") {
      textGoElement.innerHTML = "Has perdido";
      countComputer++;
    }
  }
  textPlayerElement.innerHTML = `usuario : ${countUser}`;
  textComputerElement.innerHTML = `computadora:${countComputer}`;
}

function gameOver() {
  if (count === 10) {
    if (countUser > countComputer) {
      textGoElement.innerHTML = "Has ganado humano";
    } else if (countUser < countComputer) {
      textGoElement.innerHTML = "Has perdido humano";
    } else if (countUser === countComputer) {
      textGoElement.innerHTML = "Hemos quedado empatados";
    }
    inputBtnElement.classList.add("hidden");
    resetElement.classList.remove("hidden");
  }
}
function resetGame(eve) {
  eve.preventDefault();
  inputBtnElement.classList.remove("hidden");
  resetElement.classList.add("hidden");
  countUser = 0;
  countComputer = 0;
  count = 0;
  textGoElement.innerHTML = "¡Vamos a jugar!";
  textPlayerElement.innerHTML = `usuario : ${countUser}`;
  textComputerElement.innerHTML = `computadora:${countComputer}`;
}

function handlerClickUpdate(eve) {
  eve.preventDefault();
  getResultComparing();
  gameOver();
}

inputBtnElement.addEventListener("click", handlerClickUpdate);
resetElement.addEventListener("click", resetGame);

