let openButton = document.querySelector('.button-open'); 
let closeButton = document.querySelector('.button-close'); 
let modal = document.querySelector('.modal'); 

let modalHandler = function() {
    modal.classList.toggle('modal-close');
    modal.classList.toggle('modal-open');
};

openButton.onclick = modalHandler;
closeButton.onclick = modalHandler;

