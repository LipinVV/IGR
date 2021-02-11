'use strict';
//button of menu

const btn = document.getElementById('button')
const nav = document.getElementById('navigation')
const menu = document.getElementById('menu')
const svg = document.getElementById("burger-svg");


btn.addEventListener("click", () => {
    nav.classList.toggle("main-navigation--active");
    btn.classList.toggle(".header-logo__button--active");
    menu.classList.toggle("main-navigation__menu--active");
    svg.classList.toggle("open");
});

// // // modal window 
// let openButton = document.querySelector('.button-open'); 
// let closeButton = document.querySelector('.button-close'); 
// let modal = document.querySelector('.modal'); 

// let modalHandler = function() {
//     modal.classList.toggle('modal-close');
//     modal.classList.toggle('modal-open');
// };

// openButton.onclick = modalHandler;
// closeButton.onclick = modalHandler;

 

{/* <div class="modal modal-close">
<div class="modal-content">
  <h2>Federal Law 152</h2>
  <p>
    Your Sheriff
  </p>
  <button class="button-close">Close
  </button>
</div>
</div>
<script src="js/script.js"></script> */}