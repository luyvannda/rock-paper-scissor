
const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");
const modal = document.querySelector('.modal');

function play(e) {
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const playRound = getGameScore(playerChoice, computerChoice);
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
    log(`You chose ${player}.
    Computer chose ${cpu}.
    It is a tie, good luck next round!`);
  } else if (player === "rock" && cpu === "scissors"
    || player === "paper" && cpu === "rock"
    || player === "scissors" && cpu === "paper") {
    log(`You chose ${player}.
    Computer chose ${cpu}.
    You won this round!`);
    scoreBoard.player++;
  } else {
    log(`You chose ${player}. 
    Computer chose ${cpu}.
    You lose this round, come on pull yourself together!`);
    scoreBoard.computer++;
  }

  playerScore.textContent = `Player's Score: ${scoreBoard.player}`;
  cpuScore.textContent = `CPU's Score: ${scoreBoard.computer}`;
}

// Restart game 
const restart = document.getElementById("restart");

function restartGame(e) {
  scoreBoard.player = 0;
  scoreBoard.computer = 0;
  playerScore.textContent = `Player's Score: 0`;
  cpuScore.textContent = `CPU's Score: 0`;

  const hints = document.querySelector(".hints p");
  hints.textContent = `Play the game for 5 rounds and test your skills against the cpu.`;
}

choices.forEach(choice => choice.addEventListener('click', play));
restart.addEventListener('click', restartGame);



/*
const choices = ["rock", "paper", "scissors"];

let userScore = 0;
let cpuScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomIndex];
  return randomChoice
}

function playRound() {
  // your code here!
  let round = 5;

  for (let i = 1; i <= 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt(`Please type rock, paper, or scissors`, "");
    let playerLowerCase = playerSelection.toLowerCase();
    if (choices.includes(playerLowerCase)) {
      console.log(`What you chose: ${playerLowerCase}`);
      console.log(`What computer chose: ${computerSelection}`);

      if (playerLowerCase === computerSelection) {
        console.log(`It is a tie, good luck next round`);
      } else if (playerLowerCase === "rock" && computerSelection === "scissors"
        || playerLowerCase === "paper" && computerSelection === "rock"
        || playerLowerCase === "scissors" && computerSelection === "paper") {
        console.log(`You won this round`);
        userScore++;
      } else {
        console.log(`Computer won this round, come on pull yourself together`);
        cpuScore++;
      }
    } else {
      console.log("Wrong input, please type rock, paper, or scissors");
    }
  }
  return userScore, cpuScore
}


function game(gameResult) {
  console.log(`userScore = ${userScore}, cpuScore = ${cpuScore}`);
  let finalResult;
  if (userScore > cpuScore) {
    finalResult = alert("You are the winner, human kind has been saved!!!");
  } else if (userScore < cpuScore) {
    finalResult = alert("You lost, computer will take over the world!!!");
  } else if (userScore === cpuScore) {
    finalResult = alert("It is a tie, try again or live together with the computer");
  }

  return finalResult
}
 let gameResult = playRound();
 game(gameResult);

*/