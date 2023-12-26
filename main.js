'use strict';

let count = 0;
document.querySelector('#logo').addEventListener('click', () => {
  count ++;
  document.querySelector('#counter').innerHTML = String(count).padStart(3,'');
  if (count >= 10) {
    document.querySelector('#comment').innerHTML = 'More!';
  } if(count >= 20){
    document.querySelector('#comment').innerHTML = 'Thank you!';
  }
});

let num = 1;
function slideShow() {
  if (num === 3) {
    document.querySelector(`.pic${num}`).classList.remove('fadein');
    num = 1;
    document.querySelector(`.pic${num}`).classList.add('fadein');
  } else {
    document.querySelector(`.pic${num}`).classList.remove('fadein');
    document.querySelector(`.pic${num + 1}`).classList.add('fadein');
    num++;
  }
}
let a = setInterval(slideShow, 3000);

document.querySelector('.btn-1').addEventListener('click', () => {
  if (num === 1) {
    document.querySelector(`.pic${num}`).classList.remove('fadein');
    num = 3;
    document.querySelector(`.pic${num}`).classList.add('fadein');
    clearInterval(a);
    a = setInterval(slideShow, 3000);
  } else {
    document.querySelector(`.pic${num}`).classList.remove('fadein');
    document.querySelector(`.pic${num - 1}`).classList.add('fadein');
    num--;
    clearInterval(a);
    a = setInterval(slideShow, 3000);
  }
});

document.querySelector('.btn-2').addEventListener('click', () => {
  if (num === 3) {
    document.querySelector(`.pic${num}`).classList.remove('fadein');
    num = 1;
    document.querySelector(`.pic${num}`).classList.add('fadein');
    clearInterval(a);
    a = setInterval(slideShow, 3000);
  } else {
    document.querySelector(`.pic${num}`).classList.remove('fadein');
    document.querySelector(`.pic${num + 1}`).classList.add('fadein');
    num++;
    clearInterval(a);
    a = setInterval(slideShow, 3000);
  }
});

window.addEventListener('scroll', () => {
  let elements = document.querySelectorAll('.show');
  elements.forEach(element => {
    if (!element) { return; }
    else if (element.getBoundingClientRect().top < window.innerHeight * 0.7) {
    element.classList.add('is-show');
  }
  });
});

window.addEventListener('scroll', () => {
  let btnElement = document.querySelector('.btn-top');
  if (scrollY > 500) {
    btnElement.classList.add('fade');
  } else {btnElement.classList.remove('fade');}
});