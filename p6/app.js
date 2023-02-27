let box = document.querySelector('.box');
let result = document.querySelector('.result');
let eKey = document.querySelector('.box-result-item.key p:last-child');
let eLocation = document.querySelector('.box-result-item.location p:last-child');
let eWhich = document.querySelector('.box-result-item.which p:last-child');
let eCode = document.querySelector('.box-result-item.code p:last-child');
let display = document.querySelector('.box-display');

console.log(eLocation);

document.addEventListener('keydown', e=> {

  eKey.innerText = e.key;
  eLocation.innerText = e.location;
  eWhich.innerText = e.which;
  eCode.innerText = e.code;
  display.innerText = e.code;

  box.classList.add('hide');
  result.classList.remove('hide');
})