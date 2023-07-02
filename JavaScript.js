const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomIndex];
  console.log(randomChoice);
  return randomChoice
}
getComputerChoice();


