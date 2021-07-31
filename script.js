'use strict';

let secretNumber = Math.ceil(Math.random() * 20);

const number = document.querySelector('.number');
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
const scoreDOM = document.querySelector('.score');
const highScoreDOM = document.querySelector('.highscore');

const checkBtn = document.querySelector('.check');
const restartBtn = document.querySelector('.again');

let finished = false;
let score = 20;
let highScore = 0;

function guess() {
    if (finished || input.value.length === 0) return;

    if (+input.value === secretNumber) {
        input.value = '';
        document.body.style.backgroundColor = 'green';
        number.textContent = secretNumber;
        number.style.width = '30rem';
        message.textContent = 'Congratulations! :)';
        finished = true;

        if (highScore < score) {
            highScoreDOM.textContent = highScore = score;
        }
    } else {
        message.textContent = +input.value > secretNumber ? 'Too high!' : 'Too low!';
        scoreDOM.textContent = --score;

        if (score === 0) {
            input.value = '';
            document.body.style.backgroundColor = 'red';
            message.textContent = 'Game is over! :(';
            finished = true;
        }
    }  
}

function restart() {
    secretNumber = Math.ceil(Math.random() * 20);
    input.value = '';
    document.body.style.backgroundColor = '#222';
    number.textContent = '?';
    number.style.width = '15rem';
    message.textContent = 'Start guessing...';
    scoreDOM.textContent = score = 20;
    finished = false;
}

checkBtn.addEventListener('click', guess);
restartBtn.addEventListener('click', restart);