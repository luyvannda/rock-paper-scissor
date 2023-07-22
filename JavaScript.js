const choices = ["rock", "paper", "scissor"];

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
    const playerSelection = prompt(`Please type rock, paper, or scissor`, "");
    let playerLowerCase = playerSelection.toLowerCase();
    if (choices.includes(playerLowerCase)) {
      console.log(`What you chose: ${playerLowerCase}`);
      console.log(`What computer chose: ${computerSelection}`);

      if (playerLowerCase === computerSelection) {
        console.log(`It is a tie, good luck next round`);
      } else if (playerLowerCase === "rock" && computerSelection === "scissor"
        || playerLowerCase === "paper" && computerSelection === "rock"
        || playerLowerCase === "scissor" && computerSelection === "paper") {
        console.log(`You won this round`);
        userScore++;
      } else {
        console.log(`Computer won this round, come on pull yourself together`);
        cpuScore++;
      }
    } else {
      console.log("Wrong input, please type rock, paper, or scissor");
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
// let gameResult = playRound();
// game(gameResult);

/* Pseudo Code

// Define the possible choices
choices = ["rock", "paper", "scissors"]

// Initialize the scores for user and cpu
userScore = 0
cpuScore = 0

// Repeat for five rounds
for i = 1 to 5

  // Prompt the user to enter their choice
  userChoice = input("Enter rock, paper or scissors: ")

  // Validate the user input
  while userChoice is not in choices
    userChoice = input("Invalid input. Enter rock, paper or scissors: ")

  // Generate a random choice for the cpu
  cpuChoice = random element from choices

  // Display the choices of both players
  print("You chose " + userChoice)
  print("CPU chose " + cpuChoice)

  // Compare the choices and update the scores accordingly
  if userChoice == cpuChoice
    print("It's a tie!")
  else if (userChoice == "rock" and cpuChoice == "scissors") or 
  (userChoice == "paper" and cpuChoice == "rock") 
  or (userChoice == "scissors" and cpuChoice == "paper")
    print("You win this round!")
    userScore = userScore + 1
  else
    print("CPU wins this round!")
    cpuScore = cpuScore + 1

  // Display the final scores and the winner
print("Final scores:")
print("You: " + userScore)
print("CPU: " + cpuScore)

if userScore > cpuScore
  print("You are the winner!")
else if userScore < cpuScore
  print("CPU is the winner!")
else
  print("It's a draw!")
```

*/