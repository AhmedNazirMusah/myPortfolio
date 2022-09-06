const menu = document.querySelector('.li-class2');
const detail = document.querySelector('.mobile-modal');
const buttonX = document.querySelector('.close-btn');

function open() {
  detail.classList.toggle('hide');
  menu.classList.toggle('hide');
}

function close() {
  detail.classList.toggle('hide');
  menu.classList.toggle('hide');
}

menu.addEventListener('click', open);
buttonX.addEventListener('click', close);

const modalLinks = document.getElementsByClassName('m-links');

modalLinks[0].addEventListener('click', close);
modalLinks[1].addEventListener('click', close);
modalLinks[2].addEventListener('click', close);