'use strict';

//Elementos

const selectOptionElements = document.querySelector('.js-select');
const inputBtnElement = document.querySelector('.js-input');
const textGoElement = document.querySelector('.js-start');
const textPlayerElement = document.querySelector('.js_cont_player');
const textComputerElement = document.querySelector('.js_cont_computer');
const userValue = selectOptionElements.value;

//function 

//he generado el ramdom
function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
}

function getGanador(){
    const valueGetRandom = getRandomNumber(20);
    if(userValue === 'piedra' && valueGetRandom < 3 || userValue === 'tijera' && valueGetRandom >= 6 || userValue === 'papel' && valueGetRandom >= 3){
    textGoElement.innerHTML = "Has empatado";
    }else if(userValue === 'piedra' && valueGetRandom >= 6 || userValue === 'papel' && valueGetRandom < 3 || userValue === 'tijera' || valueGetRandom >= 6){
    textGoElement.innerHTML = "Has ganado";

    }
    else{
    textGoElement.innerHTML = "Has perdido";
    }
}

/*function countGanadores(){

for(let i = 0; i <=10; i++){
countUser++;
countComputer++;
}
}*/

//textPlayerElement.innerHTML = `Jugador ${}`;
//textComputerElement.innerHTML = `Computadora ${}`;
  
function handlerClickUpdate(event){
    event.preventDefault();
    getGanador();
    //countGanadores()
}

//listener
inputBtnElement.addEventListener('click',handlerClickUpdate);