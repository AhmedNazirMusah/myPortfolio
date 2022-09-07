const menu = document.querySelector('.li-class2');
const detail = document.querySelector('.mobile-modal');
const buttonX = document.querySelector('.close-btn');
const body = document.querySelector('.bbb');

function open() {
  detail.classList.toggle('hide');
  menu.classList.toggle('hide');
  body.classList.toggle('blur');
}

function close() {
  detail.classList.toggle('hide');
  menu.classList.toggle('hide');
  body.classList.toggle('blur');
}

menu.addEventListener('click', open);
buttonX.addEventListener('click', close);

const modalLinks = document.getElementsByClassName('m-links');

modalLinks[0].addEventListener('click', close);
modalLinks[1].addEventListener('click', close);
modalLinks[2].addEventListener('click', close);

// pop up functions