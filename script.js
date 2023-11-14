let score1 = 0;
let score2 = 0;

const dice = document.getElementById("dice");
const rollBtn1 = document.getElementById("rollBtn1");
const rollBtn2 = document.getElementById("rollBtn2");
const resetBtn = document.getElementById("resetBtn");

function rollDice1() {
  const roll = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice-${roll}.png`;
  document.getElementById("player").innerText = "Player 1 to Play";
  document.getElementById("result").innerText = `Player 1 rolled ${roll}`;
  score1 += roll;
  document.getElementById("score1").innerText = score1;

  if (score1 >= 30) {
    document.getElementById("result").innerText = "Congrats.....Player 1 wins!";
    rollBtn1.disabled = true;
    rollBtn2.disabled = true;
    resetBtn.disabled = false;
  } else {
    rollBtn1.disabled = true;
    rollBtn2.disabled = false;
  }
}

function rollDice2() {
  const roll = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice-${roll}.png`;
  document.getElementById("player").innerText = "Player 2 to Play";
  document.getElementById("result").innerText =`Player 2 rolled ${roll}`;
  score2 += roll;
  document.getElementById("score2").innerText = score2;

  if (score2 >= 30) {
    document.getElementById("result").innerText = "Congrats.....Player 2 wins!";
    rollBtn1.disabled = true;
    rollBtn2.disabled = true;
    resetBtn.disabled = false;
  } else {
    rollBtn1.disabled = false;
    rollBtn2.disabled = true;
  }
}

function resetGame() {
  document.location.reload();
}
