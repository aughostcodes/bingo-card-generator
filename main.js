'use strict';

const cardGrid = document.querySelector('.card-grid');

(function createGrid() {
    for (let i = 0; i < 25; i++) {
        let createdSquare = document.createElement('div');
        createdSquare.classList.add('square');
        cardGrid.appendChild(createdSquare);
    }
})();

function toggleFreeSquare() {
    if (cardGrid.childElementCount === 25) {
        cardGrid.childNodes[13].classList.add('free-square');
        cardGrid.childNodes[13].textContent = 'FREE';
    }
}