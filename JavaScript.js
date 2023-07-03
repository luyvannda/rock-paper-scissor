const choices = ["rock", "paper", "scissor"];

let userScore = 0;
let cpuScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomIndex];
  console.log(randomChoice);
  return randomChoice
}

function playRound(playerSelection, computerSelection) {
  // your code here!
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

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