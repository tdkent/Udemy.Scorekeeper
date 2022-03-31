const playerOneButton = document.querySelector('#playerOneButton');
const playerTwoButton = document.querySelector('#playerTwoButton');
const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#playTo');

let playerOneScore = 0;
let playerOneDisplay = document.querySelector('#playerOneScore');

let playerTwoScore = 0;
let playerTwoDisplay = document.querySelector('#playerTwoScore');

let winningScore = 3;
let isGameOver = false;

playerOneButton.addEventListener('click', function() {
    if (!isGameOver) {
        playerOneScore += 1;
        if (playerOneScore === winningScore) {
            isGameOver = true;
            playerOneDisplay.classList.add('winner');
            playerTwoDisplay.classList.add('loser');
            playerOneButton.disabled = true;
            playerTwoButton.disabled = true;
        }
        playerOneDisplay.innerText = playerOneScore;    
    } 
});

playerTwoButton.addEventListener('click', function() {
    if (!isGameOver) {
        playerTwoScore += 1;
        if (playerTwoScore === winningScore) {
            isGameOver = true;
            playerOneDisplay.classList.add('loser');
            playerTwoDisplay.classList.add('winner');
            playerOneButton.disabled = true;
            playerTwoButton.disabled = true;
        }
        playerTwoDisplay.innerText = playerTwoScore;    
    } 
});

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneDisplay.innerText = 0;
    playerTwoDisplay.innerText = 0;
    playerOneDisplay.classList.remove('winner', 'loser');
    playerTwoDisplay.classList.remove('winner', 'loser');
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
}
