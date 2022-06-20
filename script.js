function playerSelection() {
  let selection = prompt("rock, paper, or scissors?");
  return selection.toLowerCase();
}

function cpuSelection() {
  let randNum = Math.floor(Math.random() * 3) + 1

  if (randNum === 1) {
    selection = 'rock'
  } if (randNum === 2) {
    selection = 'paper'
  } if (randNum === 3) {
    selection = 'scissors'
  }

  return selection;
}

function gameResult(player, cpu) {
 if (player == 'rock' && cpu == 'scissors') {
  console.log('player wins')
 } else if (player == 'paper' && cpu == 'rock') {
  console.log('player wins')
 } else if (player == 'scissors' && cpu == 'paper') {
  console.log('player wins')
 } else if (player == cpu) {
  console.log('tie')
 } else {
  console.log('player loses')
 } 
}

for (let i = 0; i < 5; i++) {
let player = playerSelection();
let cpu = cpuSelection();

console.log(`Player's choice: ${player}`);
console.log(cpu);
gameResult(player, cpu);
}
