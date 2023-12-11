const scoreElement = document.getElementsByClassName('score')[0];
const timerElement = document.getElementsByClassName('timer')[0];
const wordElement = document.getElementsByClassName('word')[0];
const inputElement = document.getElementsByClassName('input')[0];

let score = 0;
let gameStarted = false;

function startGame() {
    inputElement.removeEventListener('input', startGame);
    gameStarted = true;

    let timeLeft = 12;
    setInterval(timer, 1000);


    function timer() {
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft}s`;
    }
}

inputElement.addEventListener('input', startGame);