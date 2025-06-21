const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const turnoSpan = document.getElementById("turno");
const resetBtn = document.getElementById("reset");

const xScoreSpan = document.querySelector(".x-score");
const oScoreSpan = document.querySelector(".o-score");
const tiesScoreSpan = document.querySelector(".ties-score");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalWinnerIcon = document.getElementById("modal-winner-icon");
const modalMessage = document.getElementById("modal-message");
const quitButton = document.getElementById("quit-button");
const nextRoundButton = document.getElementById("next-round-button");

let currentPlayer = "X";
let gameState = Array(9).fill(null);

let xScore = 0;
let oScore = 0;
let tiesScore = 0;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], 
  [0, 4, 8],
  [2, 4, 6], 
];


const svgX = `
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#31C4BE" viewBox="0 0 24 24">
    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 
    4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"/>
  </svg>`;
const svgO = `
  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#F2B237" viewBox="0 0 24 24">
    <path d="M12 2C6.486 2 2 6.486 2 12c.001 5.515 4.487 10.001 
    10 10.001 5.514 0 10-4.486 10.001-10.001 0-5.514-4.486-10-10.001-10zm0 
    18.001c-4.41 0-7.999-3.589-8-8.001 0-4.411 3.589-8 
    8-8 4.412 0 8.001 3.589 8.001 8-.001 4.412-3.59 
    8.001-8.001 8.001z"/>
  </svg>`;

function renderSymbol(cell, player) {
  cell.innerHTML = player === "X" ? svgX : svgO;
}

function checkWinner() {
  return winningCombos.some((combo) => {
    const [a, b, c] = combo;
    return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
  });
}

function showModal(type, winner = null) {
  modal.classList.remove("hidden"); 

  if (type === "win") {
    modalTitle.textContent = " GANASTE ! ";
    modalWinnerIcon.innerHTML = winner === "X" ? svgX : svgO;
    modalMessage.textContent = "GANÓ";
    modalMessage.classList.remove("text-[#f2b237]"); 
    modalMessage.classList.add(winner === "X" ? "text-[#31c4be]" : "text-[#f2b237]"); 
  } else if (type === "tie") {
    modalTitle.textContent = "OH NO, EMPATARON!";
    modalWinnerIcon.innerHTML = ""; 
    modalMessage.textContent = "VAYAN AL DESEMPATE";
    modalMessage.classList.remove("text-[#31c4be]", "text-[#f2b237]"); 
    modalMessage.classList.add("text-[#a8bec9]"); 
  }
}

function hideModal() {
  modal.classList.add("hidden");
}

function resetBoard() {
  gameState = Array(9).fill(null); 
  currentPlayer = "X"; 
  turnoSpan.textContent = currentPlayer; 
  turnoSpan.className = "font-bold text-[#F2B237]"; 
  cells.forEach((cell) => (cell.innerHTML = "")); 
  hideModal(); 
}

function resetGame() {
  resetBoard(); 
  xScore = 0; 
  oScore = 0; 
  tiesScore = 0; 
  xScoreSpan.textContent = xScore; 
  oScoreSpan.textContent = oScore; 
  tiesScoreSpan.textContent = tiesScore; 
}

function handleClick(e) {
  const cell = e.currentTarget;
  const index = cell.dataset.index;

  if (gameState[index] || checkWinner() || !modal.classList.contains("hidden")) {
    return;
  }

  gameState[index] = currentPlayer;
  renderSymbol(cell, currentPlayer);

  if (checkWinner()) {
    if (currentPlayer === "X") {
      xScore++;
      xScoreSpan.textContent = xScore; 
    } else {
      oScore++;
      oScoreSpan.textContent = oScore; 
    }
    showModal("win", currentPlayer); 
  } else if (gameState.every((cell) => cell)) {
    tiesScore++;
    tiesScoreSpan.textContent = tiesScore; 
    showModal("tie"); 
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    turnoSpan.textContent = currentPlayer;
    turnoSpan.className = currentPlayer === "X" ? "font-bold text-[#F2B237]" : "font-bold text-[#31C4BE]";
  }
}

cells.forEach((cell) => cell.addEventListener("click", handleClick));

resetBtn.addEventListener("click", resetGame);

quitButton.addEventListener("click", () => {
  resetGame(); // 
});

nextRoundButton.addEventListener("click", () => {
  resetBoard(); 
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    hideModal();
  }
});

turnoSpan.className = "font-bold text-[#F2B237]"; 