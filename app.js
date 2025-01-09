/*-------------- Constants -------------*/

const card = document.querySelectorAll('.card');
const playButton = document.getElementById('play-again-btn')
const totalPairs = 6;

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

function resetGame() {
  flippedCards = [];//Reset the flipped card Array
  cards.forEach(card => {
    card.querySelector('.card-inner').classList.remove('flipped'); //The cards that are already flipped gets reset and flipped
    card.classList.remove('hidden'); //Make sure the cards are hidden.
    matchedPairs = 0; //Added the matched pairs to equal 0 so when the play again button is hidden the win message gets removed.
    document.getElementById('win-message').classList.add('hidden');
  });

  shuffleCards();
}

playButton.addEventListener('click', resetGame);

function checkWinCondition() {
  if(matchedPairs === totalPairs) {
    document.getElementById('win-message').classList.remove('hidden');
  }
}

/*----------- Event Listeners ----------*/

playButton.addEventListener('click', (resetGame));

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
          matchedPairs++;//Added the macthedPair here so it can check to see if all cards are matched and log winner!
          checkWinCondition();
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