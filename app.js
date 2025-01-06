/*-------------- Constants -------------*/

const card = document.querySelectorAll('.card');
const startButton = document.getElementById('startButton');

/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/

function flip() {

}

function startGame() {
    
}

/*----------- Event Listeners ----------*/

startButton.addEventListener('click', startGame)

card.forEach((card) => card.addEventListener('click',flip));

card.forEach(card => {
    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
});
