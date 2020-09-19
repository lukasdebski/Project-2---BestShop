// const button = document.querySelector(".burger");
// const menu = document.querySelector(".menu__items");

// button.addEventListener("click", function () {
//     menu.classList.toggle("show");
//     console.log("dziala!");
// });

const burger = document.querySelector('.burger');

// Shift + alt + strzalka w dol skopiuje nam linijke w ktorej jestesmy.
const iconBruger = document.querySelector('.fa-bars');
const iconX = document.querySelector('.fa-times');
const column = document.querySelector('.menu__items');


burger.addEventListener('click', function () {
    iconBruger.classList.toggle('show'); // tak
    iconX.classList.toggle('show'); // nie
    column.classList.toggle('show'); // nie
})