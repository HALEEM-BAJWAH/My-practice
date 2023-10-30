let playerPoints = 0;
let computerPoints = 0;

let choose1stInput = document.querySelector('.choose1st')
let choose2ndInput = document.querySelector('#choose2nd')
const playButton = document.querySelector('#button-19')
const clearButton = document.querySelector('#button-20')
const playerPointsDisplay = document.querySelector('.player-points')
const computerPointsDisplay = document.querySelector('.computer-points')

function generateRandomComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"]
  let playerChoice = choose1stInput.value.toUpperCase() 

  if (choices.includes(playerChoice) && choose2ndInput.value.trim() === "" || choose2ndInput.value === "Invalid choice") {
    const randomIndex = Math.floor(Math.random() * choices.length)
    const randomChoice = choices[randomIndex]
    choose2ndInput.value = randomChoice
  } else {
    // Display a message indicating that the player's choice is invalid
    choose2ndInput.value = "Invalid choice"
  }
}

playButton.addEventListener('click', function() {
  let playerChoice = choose1stInput.value.toLowerCase()

  let computerChoice = choose2ndInput.value.toLowerCase()

  if (playerChoice === computerChoice) {
  } 
  else if (

    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')

  ) {

    playerPoints++
  
  } 
  else {
    computerPoints++
  }

  playerPointsDisplay.textContent = playerPoints
  computerPointsDisplay.textContent = computerPoints

  choose1stInput.value = ''
  choose2ndInput.value = ''
});

clearButton.addEventListener('click', function () {

  playerPoints = 0
  computerPoints = 0

  choose1stInput.value = ''
  choose2ndInput.value = ''

  playerPointsDisplay.textContent = playerPoints
  computerPointsDisplay.textContent = computerPoints
});

let ROCKER = document.getElementById("rockButton")

ROCKER.addEventListener('click', function () {
  choose1stInput.value = 'ROCK'
  generateRandomComputerChoice()
});

let PAPERER = document.getElementById("paperButton")

PAPERER.addEventListener('click', function () {
  choose1stInput.value = 'PAPER'
  generateRandomComputerChoice()
});

let SCISSORSER =document.getElementById("scissorsButton")

SCISSORSER.addEventListener('click', function () {
  choose1stInput.value = 'SCISSORS'
  generateRandomComputerChoice()
});

let openPopupButtonEl = document.getElementById("openPopupButton")

openPopupButtonEl.addEventListener("click", openPopup);

let customPopupEl = document.getElementById("customPopup")

customPopupEl.addEventListener("click", closePopup);

function openPopup() {
  document.getElementById("customPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("customPopup").style.display = "none";
}
