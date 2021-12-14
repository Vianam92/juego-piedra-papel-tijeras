"use strict";

//Elementos

const selectOptionElements = document.querySelector(".js-select");
const inputBtnElement = document.querySelector(".js-input");
const textGoElement = document.querySelector(".js-start");
const textPlayerElement = document.querySelector(".js_cont_player");
const textComputerElement = document.querySelector(".js_cont_computer");
const userValue = selectOptionElements.value;
const resetElement = document.querySelector(".js-reset");
let countUser = 0;
let countComputer = 0;
//function

//he generado el ramdom
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function pararCount() {
  if (countUser === 11 || countComputer === 11) {
    inputBtnElement.classList.add("hidden");
    resetElement.classList.remove("hidden");
  }
}

function getGanador() {
  const valueGetRandom = getRandomNumber(10);
  if (
    (userValue === "piedra" && valueGetRandom < 3) ||
    (userValue === "tijera" && valueGetRandom >= 6) ||
    (userValue === "papel" && valueGetRandom >= 3)
  ) {
    textGoElement.innerHTML = "¡Has empatado!";
    console.log(`El computador saco ${valueGetRandom}`);
  } else if (
    (userValue === "piedra" && valueGetRandom >= 6) ||
    (userValue === "papel" && valueGetRandom < 3) ||
    userValue === "tijera" ||
    valueGetRandom >= 6
  ) {
    textGoElement.innerHTML = "¡Has ganado!";
    textPlayerElement.innerHTML = `jugador: ${countUser++}`;
    console.log(`El computador saco ${valueGetRandom}`);
  } else {
    textGoElement.innerHTML = "¡Has perdido!";
    textComputerElement.innerHTML = `ordenador: ${countComputer++}`;
    console.log(`El computador saco ${valueGetRandom}`);
  }
  pararCount();
}

function handlerClickUpdate(event) {
  event.preventDefault();
  getGanador();
}
function handlerButonReset(event) {
  event.preventDefault();
  inputBtnElement.classList.remove("hidden");
  resetElement.classList.add("hidden");
  countUser = 0;
  countComputer = 0;
}

//listener
inputBtnElement.addEventListener("click", handlerClickUpdate);
resetElement.addEventListener("click", handlerButonReset);
