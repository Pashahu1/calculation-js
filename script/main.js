'use strict'
const defaultResult = 0;
let curectResult = defaultResult;
let operatorsIcule = [];

function userInputAdd() { //функція яка передає значення які ввів користувач
  return parseInt(contentR.value);
}

function createOperatorCalculate(operator,resultBefor,calcNumber) { //функція яка приймає 3 параметри для умови розрахунку
  const correctDescription = `${resultBefor} ${operator} ${calcNumber}`; //умова розрахунку(сценарій)
  output(`Result: ${curectResult}`,correctDescription); // виводимо результат розрахунку,і результат покроковового розрахунку
}

function calculation(calculetionType) {
    const usersResult = userInputAdd(); //передаємо функцію з данними що ввів користувач

    if (
        calculetionType !== 'ADD' &&
        calculetionType !== 'SUBSTRACT' &&
        calculetionType !== 'MULTIPLE' &&
        calculetionType !== 'DIVISION' ||
        !usersResult
      ) {
        return;
      }

    const initialResult = curectResult; // створюємо в поточній функції 0-значення(значення початку розрахунку)
    let mathOperator;

    if(calculetionType === 'ADD') { //перевірка чи дорівнює значення функціїї(або вказаній дії)
        curectResult += usersResult; // робимо розрахунок 
        mathOperator = '+';
      }else if(calculetionType === 'SUBSTRACT') {
       curectResult -= usersResult;
       mathOperator = '-';
      }else if(calculetionType === 'MULTIPLE') {
       curectResult *= usersResult;
       mathOperator = '*';
      }else if(calculetionType === 'DIVISION') {
       curectResult /= usersResult;
       mathOperator = '/';
      }

    createOperatorCalculate(mathOperator,initialResult,usersResult) // задаємо параметри розрахунку
    writeToLog(calculetionType,initialResult,usersResult,curectResult)
}

function add() {
  calculation('ADD')
}

function substract() {
  calculation('SUBSTRACT')
}

function multiple() {
  calculation('MULTIPLE')
}

function division() {
  calculation('DIVISION')
}


function writeToLog(  
  operationIdentifier,
  prevReesult,
  operationNumber,
  newResult) {
    const logEntries = { // обєкт,з покроковим розрахунком
      operation: operationIdentifier, //назва операції
      preResult: prevReesult, //початкове значення = 0
      entredNumber: operationNumber, // значення користувача
      result: newResult, // результат розрахунку
    };

    operatorsIcule.push(logEntries); //додаівання до масиву результату з покроковим розрахунком
    console.log(operatorsIcule) // вивід розрахунку у консоль розробника
}

// function add() {
//   const usersResult = userInputAdd(); //передаємо функцію з данними що ввів користувач
//   const initialResult = curectResult; // створюємо в поточній функції 0-значення(значення початку розрахунку)
//   curectResult += usersResult; // робимо розрахунок 
//   createOperatorCalculate('+',initialResult,usersResult) // задаємо параметри розрахунку
//   writeToLog('ADD',initialResult,usersResult,curectResult)
// }

// function substract() {//віднімання
//   const usersResult = userInputAdd();
//   const initialResult = curectResult;
//   curectResult -= usersResult;
//   createOperatorCalculate('-',initialResult,usersResult);
//   writeToLog('SUBSTRACT',initialResult,usersResult,curectResult);
// }

// function multiple() {//множення
//   const usersResult = userInputAdd();
//   const initialResult = curectResult;
//   curectResult *= usersResult;
//   createOperatorCalculate('*',initialResult,usersResult);
//   writeToLog('MULTIPLE',initialResult,usersResult,curectResult);
// }

// function division() {//ділення
//   const usersResult = userInputAdd();
//   const initialResult = curectResult;
//   curectResult /= usersResult;
//   createOperatorCalculate('/',initialResult,usersResult)
//   writeToLog('DIVIED',initialResult,usersResult,curectResult);
// }

plusBtn.addEventListener('click', add); //подія при натисканні на кнопку
substractBtn.addEventListener('click', substract); //подія при натисканні на кнопку
multipleBtn.addEventListener('click', multiple); //подія при натисканні на кнопку
divisionBtn.addEventListener('click', division); //подія при натисканні на кнопку
