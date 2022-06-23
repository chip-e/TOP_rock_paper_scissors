const choices = document.querySelectorAll('button');
const cpuDisplay = document.getElementById('cpu-display');
const winDisplay = document.getElementById('win-display');
const playerDisplay = document.getElementById('player-display');
const playerScoreDisplay = document.getElementById('player-score');
const cpuScoreDisplay = document.getElementById('cpu-score');
const tieDisplay = document.getElementById('ties');
let player;
let playerScore = 0;
let cpuScore = 0; 
let tieScore = 0;
let maxScore = 5;
 
function cpuSelection() {
  let randNum = Math.floor(Math.random() * 3) + 1
  if (randNum === 1) cpuChoice = 'ROCK'
  if (randNum === 2) cpuChoice = 'PAPR'
  if (randNum === 3) cpuChoice = 'SCSR' 
  return cpuChoice;
} 
choices.forEach((button) => {
  button.addEventListener('click', (e) => {
    player = e.target.id;
    playerDisplay.innerHTML = player;
    cpu = cpuSelection();
    cpuDisplay.innerHTML = cpu;
    let gameResult = (player, cpu) => {
      if (player == 'ROCK' && cpu == 'SCSR' || player == 'PAPR' && cpu == 'ROCK' || player == 'SCSR' && cpu == 'PAPR') {
        playerScore++;    //tie
      } else if (player == cpu) {
        tieScore++ //change to msg on page
      } else {    //lose
        cpuScore++;
      }
    };
    gameResult(player, cpu);
    playerScoreDisplay.innerHTML = playerScore;
    cpuScoreDisplay.innerHTML = cpuScore;
    tieDisplay.innerHTML = tieScore;
    //if (playerScore === 5) 
    //if (cpuScore === 5)

  });
});
