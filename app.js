/*-------------- Constants -------------*/

const card = document.querySelectorAll('.card');
const playButton = document.getElementById('playButton')

/*---------- Variables (state) ---------*/

let cards = Array.from(document.querySelectorAll('.card'));
let flippedCards = [];

/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/

function shuffleCards() {
  const cards = Array.from(document.querySelectorAll('.card'));
  cards.sort(() => Math.random() - 0.5);
  
  const gameBoard = document.querySelector('.game-board');
  cards.forEach(card => gameBoard.appendChild(card)); // Reorder the cards
}

shuffleCards()

/*----------- Event Listeners ----------*/


cards.forEach(card => {
  card.addEventListener('click', () => {
    // Prevent clicking the same card twice
    if (flippedCards.length < 2 && !card.querySelector('.card-inner').classList.contains('flipped')) {
      flippedCards.push(card);
      card.querySelector('.card-inner').classList.add('flipped');
      
      // Log which cards are flipped
      console.log(`Flipped Cards: ${flippedCards.map(card => card.dataset.id).join(', ')}`);

      if (flippedCards.length === 2) {
        // Check if cards match
        const [firstCard, secondCard] = flippedCards;
        
        // Log the data-id values to ensure they're being compared correctly
        console.log(`Comparing cards with IDs: ${firstCard.dataset.id} and ${secondCard.dataset.id}`);

        if (firstCard.dataset.id === secondCard.dataset.id) {
          console.log('Match found!');
        } else {
          setTimeout(() => {
            firstCard.querySelector('.card-inner').classList.remove('flipped');
            secondCard.querySelector('.card-inner').classList.remove('flipped');
          }, 1000); // Wait 1 second before flipping back
        }

        flippedCards = []; // Reset the flippedCards array
      }
    }
  });
});
