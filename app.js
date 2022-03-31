const playerOneButton = document.querySelector('#playerOneButton');
const playerTwoButton = document.querySelector('#playerTwoButton');

let playerOneScore = 0;
let playerOneDisplay = document.querySelector('#playerOneScore');

let playerTwoScore = 0;
let playerTwoDisplay = document.querySelector('#playerTwoScore');

let winningScore = 5;

playerOneButton.addEventListener('click', function() {
    if (playerOneScore !== winningScore) {
        playerOneScore += 1;
        playerOneDisplay.innerText = playerOneScore;
    }
});

playerTwoButton.addEventListener('click', function() {
    if (playerTwoScore !== winningScore) {
        playerTwoScore += 1;
        playerTwoDisplay.innerText = playerTwoScore;
    }
});