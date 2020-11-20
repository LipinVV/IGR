'use strict';
//button of menu

const btn = document.getElementById('button')
const nav = document.getElementById('navigation')
const menu = document.getElementById('menu')
const svg = document.getElementById("burger-svg");


btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
    menu.classList.toggle("active");
    svg.classList.toggle("open");
});

// // modal window 
let openButton = document.querySelector('.button-open'); 
let closeButton = document.querySelector('.button-close'); 
let modal = document.querySelector('.modal'); 

let modalHandler = function() {
    modal.classList.toggle('modal-close');
    modal.classList.toggle('modal-open');
};

openButton.onclick = modalHandler;
closeButton.onclick = modalHandler;

 

