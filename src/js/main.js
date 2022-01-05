"use strict";

//Elementos
const selectOptionElements = document.querySelector(".js-select");
const inputBtnElement = document.querySelector(".js-input");
const articleElement = document.querySelector(".js-article");
const resetElement = document.querySelector(".js-reset");
const startElement = document.querySelector(".js-start");

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
    document.querySelector(".js-tijera").classList.add("hidden");
    document.querySelector(".js-papel").classList.add("hidden");
    document.querySelector(".js-piedra").classList.remove("hidden");
  } else if (randomNumber >= 6) {
    moveComputer = "tijera";
    document.querySelector(".js-tijera").classList.remove("hidden");
    document.querySelector(".js-papel").classList.add("hidden");
    document.querySelector(".js-piedra").classList.add("hidden");
  } else {
    moveComputer = "papel";
    document.querySelector(".js-tijera").classList.add("hidden");
    document.querySelector(".js-piedra").classList.add("hidden");
    document.querySelector(".js-papel").classList.remove("hidden");
  }
  return moveComputer;
}

//get value from select
function getValueUser() {
  const valueUser = selectOptionElements.value;
  return valueUser;
}

function getResultComparing() {
  let moveComputer = getValueComputer();
  let moveUser = getValueUser();
  count++;
  paintStart("");
  if (moveComputer === moveUser) {
    paintStart("Empate");
  } else if (moveUser === "piedra") {
    if (moveComputer === "tijera") {
      paintStart("Has ganado");
      countUser++;
    } else if (moveComputer === "papel") {
      paintStart("Has perdido");
      countComputer++;
    }
  } else if (moveUser === "tijera") {
    if (moveComputer === "papel") {
      paintStart("Has ganado");
      countUser++;
    } else if (moveComputer === "piedra") {
      paintStart("Has perdido");
      countComputer++;
    }
  } else if (moveUser === "papel") {
    if (moveComputer === "piedra") {
      paintStart("Has ganado");
      countUser++;
    } else if (moveComputer === "tijera") {
      paintStart("Has perdido");
      countComputer++;
    }
  }
  paintFunction(countUser, countComputer);
}

function gameOver() {
  if (count === 10) {
    if (countUser > countComputer) {
      paintStart("Has ganado humano");
    } else if (countUser < countComputer) {
      paintStart("Has perdido humano");
    } else if (countUser === countComputer) {
      paintStart("Hemos quedado empatados");
    }
    inputBtnElement.classList.add("hidden");
    resetElement.classList.remove("hidden");
  }
}

//function handler
function resetGame(eve) {
  eve.preventDefault();
  inputBtnElement.classList.remove("hidden");
  resetElement.classList.add("hidden");
  countUser = 0;
  countComputer = 0;
  count = 0;
  paintStart("¡Vamos a jugar!");
  paintFunction(countUser, countComputer);
}

function handlerClickUpdate(eve) {
  eve.preventDefault();
  getResultComparing();
  gameOver();
}

//paint
const paintStart = (text) => {
  startElement.textContent = "";
  const createText = document.createElement("p");
  createText.className = "form_Start--text";
  createText.textContent = text;
  startElement.appendChild(createText);
};

const paintFunction = (counterUser, counterRobot) => {
  articleElement.textContent = "";
  const createDiv = document.createElement("div");
  createDiv.className = "form_div";

  const createImgUser = document.createElement("img");
  createImgUser.src = "./assets/images/user_accounts_15362.png";
  createImgUser.className = "form_div--img";
  createImgUser.alt = "user";

  const createUser = document.createElement("p");
  createUser.className = "js_cont_player form_div--text";
  createUser.textContent = `usuario: ${counterUser}`;

  createDiv.appendChild(createUser);
  createDiv.appendChild(createImgUser);

  const createDivRobot = document.createElement("div");
  createDivRobot.className = "form_div";

  const createImgRobot = document.createElement("img");
  createImgRobot.src = "./assets/images/Robot_37500.png";
  createImgRobot.alt = "robot";
  createImgRobot.className = "form_div--img";

  const createRobot = document.createElement("p");
  createRobot.className = "js_cont_computer form_div--text";
  createRobot.textContent = `Robot: ${counterRobot}`;

  createDivRobot.appendChild(createImgRobot);
  createDivRobot.appendChild(createRobot);

  articleElement.appendChild(createDiv);
  articleElement.appendChild(createDivRobot);
};

//listener
inputBtnElement.addEventListener("click", handlerClickUpdate);
resetElement.addEventListener("click", resetGame);

paintStart("Vamos a Jugar");
paintFunction(0, 0);
