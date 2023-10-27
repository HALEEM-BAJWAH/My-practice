// Initialize player and computer points
let playerPoints = 0;
let computerPoints = 0;

// Get the input fields and buttons
const choose1stInput = document.querySelector('.choose1st');
const choose2ndInput = document.querySelector('#choose2nd');
const playButton = document.querySelector('#button-19');
const clearButton = document.querySelector('#button-20');
const playerPointsDisplay = document.querySelector('.player-points');
const computerPointsDisplay = document.querySelector('.computer-points');

// Event listener for the "START" button
playButton.addEventListener('click', () => {
  // Get the player's input and map abbreviations
  let playerChoice = choose1stInput.value.toLowerCase();
  

  // Get the computer's input and map abbreviations
  let computerChoice = choose2ndInput.value.toLowerCase();
  

  if (playerChoice === computerChoice) {
    // It's a tie, no one gains a point.
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    // Player wins, player gains a point.
    playerPoints++;
  } else {
    // Computer wins, computer gains a point.
    computerPoints++;
  }

  // Update the points display
  playerPointsDisplay.textContent = playerPoints;
  computerPointsDisplay.textContent = computerPoints;

  // Clear input fields
  choose1stInput.value = '';
  choose2ndInput.value = '';
});

// Event listener for the "CLEAR" button
clearButton.addEventListener('click', () => {
  // Reset the points to 0
  playerPoints = 0;
  computerPoints = 0;

  // Clear the input fields
  choose1stInput.value = '';
  choose2ndInput.value = '';

  // Update the points display
  playerPointsDisplay.textContent = playerPoints;
  computerPointsDisplay.textContent = computerPoints;
});
