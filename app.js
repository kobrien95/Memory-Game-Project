/*-------------- Constants -------------*/

const card = document.querySelectorAll('.card');
const playButton = document.getElementById('play-again-btn')
const totalPairs = 6;

/*---------- Variables (state) ---------*/

let cards = Array.from(document.querySelectorAll('.card'));
let flippedCards = [];
let matchedPairs = 0;

/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/

function shuffleCards() {
  const cards = Array.from(document.querySelectorAll('.card'));
  cards.sort(() => Math.random() - 0.5);
  
  const gameBoard = document.querySelector('.game-board');
  cards.forEach(card => gameBoard.appendChild(card));
}

shuffleCards()

function resetGame() {
    flippedCards = [];
  cards.forEach(card => {
    card.querySelector('.card-inner').classList.remove('flipped');
    card.classList.remove('hidden');
    matchedPairs = 0;
    document.getElementById('win-message').classList.add('hidden');
  });

  shuffleCards();
  showbrief();
}

playButton.addEventListener('click', resetGame);

function checkWinCondition() {
  if(matchedPairs === totalPairs) {
    document.getElementById('win-message').classList.remove('hidden');
  }
}

function showbrief() {
  card.forEach(card => {
    card.querySelector('.card-inner').classList.add('flipped');
  })
  setTimeout(() => {
    card.forEach(card => {
      card.querySelector('.card-inner').classList.remove('flipped');
    })
  },2000);
}


/*----------- Event Listeners ----------*/

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (flippedCards.length < 2 && !card.querySelector('.card-inner').classList.contains('flipped')) {
      flippedCards.push(card);
      card.querySelector('.card-inner').classList.add('flipped');
        if (flippedCards.length === 2) {
        const [firstCard, secondCard] = flippedCards;
        if (firstCard.dataset.id === secondCard.dataset.id) {
          matchedPairs++;
          checkWinCondition();
        } else {
          setTimeout(() => {
            firstCard.querySelector('.card-inner').classList.remove('flipped');
            secondCard.querySelector('.card-inner').classList.remove('flipped');
          }, 1000);
        }

        flippedCards = [];
      }
    }
  });
});