/*-------------- Constants -------------*/

const card = document.querySelectorAll('.card');
const playButton = document.getElementById('play-again-btn')
const totalPairs = 6;

// const timerElement = document.getElementById('timer');
// const gameBoard = document.getElementById('gameBoard')

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
  cards.forEach(card => gameBoard.appendChild(card)); // Reorder the cards
}

shuffleCards()

// function checkIfGameWon() {
//   matchedPairs++;
//   if (matchedPairs === totalPairs) {
//     alert('Congradulations You Won!');
//   }
// }

// function endGame() {
//   alert('You Win');
// }

// checkIfGameWon()
// endGame()

/*----------- Event Listeners ----------*/


cards.forEach(card => {
  card.addEventListener('click', () => {
    if (flippedCards.length < 2 && !card.querySelector('.card-inner').classList.contains('flipped')) {
      flippedCards.push(card);
      card.querySelector('.card-inner').classList.add('flipped');
      
      // console.log(`Flipped Cards: ${flippedCards.map(card => card.dataset.id).join(', ')}`);

      if (flippedCards.length === 2) {
        const [firstCard, secondCard] = flippedCards;
        
        // console.log(`Comparing cards with IDs: ${firstCard.dataset.id} and ${secondCard.dataset.id}`);

        if (firstCard.dataset.id === secondCard.dataset.id) {
          // console.log('Match found!');
        } else {
          setTimeout(() => {
            firstCard.querySelector('.card-inner').classList.remove('flipped');
            secondCard.querySelector('.card-inner').classList.remove('flipped');
          }, 1000); // Wait 1 second before flipping back
        }

        flippedCards = [];
      }
    }
  });
});
