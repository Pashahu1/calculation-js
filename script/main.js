'use strict'
const defaultResult = 0;
let curectResult = defaultResult;


function userInputAdd() { //функція яка передає значення які ввів користувач
  return parseInt(contentR.value)
}

function createOperatorCalculate(operator,resultBefor,calcNumber) { //функція яка приймає 3 параметри для умови розрахунку
  const correctDescription = `Result: ${resultBefor} ${operator} ${calcNumber}`; //умова розрахунку(сценарій)
  output(curectResult); // виводимо результат розрахунку
}

function add() {
  const usersResult = userInputAdd(); //передаємо функцію з данними що ввів користувач
  const initialResult = curectResult; // створюємо в поточній функції 0-значення(значення початку розрахунку)
  curectResult = curectResult + usersResult; // робимо розрахунок 
  createOperatorCalculate('+',initialResult,usersResult) // задаємо параметри розрахунку
}

function substract() {//віднімання
  const usersResult = userInputAdd();
  const initialResult = curectResult;
  curectResult = curectResult - usersResult;
  createOperatorCalculate('-',initialResult,usersResult)
}

function multiple() {//множення
  const usersResult = userInputAdd();
  const initialResult = curectResult;
  curectResult = curectResult * usersResult;
  createOperatorCalculate('*',initialResult,usersResult)
}

function division() {//ділення
  const usersResult = userInputAdd();
  const initialResult = curectResult;
  curectResult = curectResult / usersResult;
  createOperatorCalculate('/',initialResult,usersResult)
}

plusBtn.addEventListener('click', add); //подія при натисканні на кнопку
substractBtn.addEventListener('click', substract); //подія при натисканні на кнопку
multipleBtn.addEventListener('click', multiple); //подія при натисканні на кнопку
divisionBtn.addEventListener('click', division); //подія при натисканні на кнопку
