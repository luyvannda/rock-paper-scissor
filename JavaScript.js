
const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");
const modal = document.querySelector('.modal');

function play(e) {
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const playRound = getGameScore(playerChoice, computerChoice);
  const winner = getWinner();
  const finalResult = displayWinner(winner);
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomIndex];
  return randomChoice
}
// log message to hint when player win lost or tie
function log(message) {
  const hints = document.querySelector(".hints p");
  hints.textContent = message;
}


//Get Game Score
const scoreBoard = {
  player: 0,
  computer: 0
};

const playerScore = document.querySelector(`#score p:first-child`);
const cpuScore = document.querySelector(`#score p:last-child`);

function getGameScore(player, cpu) {
  if (player === cpu) {
    log(`Computer chose ${cpu}.
    It is a tie, good luck next round!`);
  } else if (player === "rock" && cpu === "scissors"
    || player === "paper" && cpu === "rock"
    || player === "scissors" && cpu === "paper") {
    log(`Computer chose ${cpu}.
    You won this round!`);
    scoreBoard.player++;
  } else {
    log(`Computer chose ${cpu}.
    You lose this round, come on pull yourself together!`);
    scoreBoard.computer++;
  }

  playerScore.textContent = `Player's Score: ${scoreBoard.player}`;
  cpuScore.textContent = `CPU's Score: ${scoreBoard.computer}`;
}

// Decide the winner after five round and display the result
function getWinner() {
  console.log(scoreBoard.player, scoreBoard.computer);
  if (scoreBoard.player > scoreBoard.computer &&
    scoreBoard.player === 5) {
    return 'player';
  } else if (scoreBoard.computer > scoreBoard.player &&
    scoreBoard.computer === 5) {
    return 'computer';
  }
}

function displayWinner(winner) {
  if (winner === 'player') {
    result.innerHTML = `
    <h1 class="text-win">You Win</h1>
    <i class="modal-choice fa-solid fa-face-smile fa-8x"></i>
    <p>Congratulations!!!</p>
    `;
    modal.style.display = `block`;
  } else if (winner === 'computer') {
    result.innerHTML = `
    <h1 class="text-lose">You lose</h1>
    <i class="modal-choice fa-solid fa-face-frown-open fa-8x"></i>
    <p>Click outside to try Again!!!</p>
    `;
    modal.style.display = `block`;
  }
}

// clear modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = `none`;
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    playerScore.textContent = `Player's Score: 0`;
    cpuScore.textContent = `CPU's Score: 0`;

    const hints = document.querySelector(".hints p");
    hints.textContent = `Play the game against the cpu, winner is the first to get 5 scores.`;
  }
}

// Restart game 
const restart = document.getElementById("restart");

function restartGame(e) {
  scoreBoard.player = 0;
  scoreBoard.computer = 0;
  playerScore.textContent = `Player's Score: 0`;
  cpuScore.textContent = `CPU's Score: 0`;

  const hints = document.querySelector(".hints p");
  hints.textContent = `Play the game against the cpu, winner is the first to get 5 scores.`;
}

choices.forEach(choice => choice.addEventListener('click', play));
restart.addEventListener('click', restartGame);
window.addEventListener('click', clearModal);
window.addEventListener('touchend', clearModal);
