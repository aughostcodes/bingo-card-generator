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

// just testing
let library = [];

function Book(){
}

Book.prototype.sayInfo = function () {
    console.log(this.info);
}

function NewBook(name, author, info) {
    this.name = name;
    this.author = author;
    this.info = info;
}

NewBook.prototype = Object.create(Book.prototype);

const wasteLand = new NewBook('The Waste Land', 'Eliot', 'your thesis');

library.push(wasteLand);
