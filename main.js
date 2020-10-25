'use strict';

const cardGrid = document.querySelector('.card-grid');

(function create() {
    for (let i = 0; i < 25; i++) {
        let createdSquare = document.createElement('div');
        createdSquare.classList.add('square');
        cardGrid.appendChild(createdSquare);
    }
})();

console.log('testing');