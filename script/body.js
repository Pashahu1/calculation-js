const plusBtn = document.querySelector('.button-plus');
const substractBtn = document.querySelector('.button-minus');
const divisionBtn = document.querySelector('.button-division');
const multipleBtn = document.querySelector('.button-multiply');
const contentR = document.querySelector('.input');

const resultCount = document.querySelector('.outputResult');
const resultText = document.querySelector('.outputText');

function output(result, text) {
  resultCount.textContent = result;
  resultText.textContent = text;
}

