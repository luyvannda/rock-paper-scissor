
const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector('.modal');
const scoreBoard = {
  player: 0,
  computer: 0
};

function play(e) {
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  console.log(`Player chose ${playerChoice}`);
  console.log(`Computer chose ${computerChoice}`)
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomIndex];
  return randomChoice
}

function getWinner(player, cpu) {

  if (player === cpu) {
    console.log(`It is a tie, good luck next round`);
  } else if (player === "rock" && cpu === "scissors"
    || player === "paper" && cpu === "rock"
    || player === "scissors" && cpu === "paper") {
    console.log(`You won this round`);
    return scoreBoard.player += 1;
  } else {
    console.log(`Computer won this round, come on pull yourself together`);
    return scoreBoard.computer += 1;
  }
}



choices.forEach(choice => choice.addEventListener('click', play));

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