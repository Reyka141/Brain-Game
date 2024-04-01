import startGame from '../index.js';
import getNumber from '../gen-num.js';

const calcNum = (question) => {
  let calc;
  const arrFromquest = question.split(' ');
  const firstNum = Number(arrFromquest[0]);
  const secondNum = Number(arrFromquest[2]);
  switch (arrFromquest[1]) {
    case '+':
      calc = firstNum + secondNum;
      break;
    case '-':
      calc = firstNum - secondNum;
      break;
    default:
      calc = firstNum * secondNum;
  }
  return calc.toString();
};

const genCalcQuestion = () => {
  const firstNum = getNumber();
  const secondNum = getNumber();
  const operations = ['+', '-', '*'];
  const currentOperation = operations[getNumber(0, 3)];
  const question = (`${firstNum} ${currentOperation} ${secondNum}`);
  return question;
};

const startCalcGame = () => {
  const description = 'What is the result of the expression?';
  startGame(description, genCalcQuestion, calcNum);
};

export default startCalcGame;
