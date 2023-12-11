const scoreElement = document.getElementsByClassName('score')[0];
const timerElement = document.getElementsByClassName('timer')[0];
const wordElement = document.getElementsByClassName('word')[0];
const inputElement = document.getElementsByClassName('input')[0];

let score = 0;
let gameStarted = false;

function startGame() {
    inputElement.removeEventListener('input', startGame);
    gameStarted = true
}

inputElement.addEventListener('input', startGame);