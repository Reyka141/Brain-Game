import startGame from '../index.js';
import getNumber from '../gen-num.js';

const genOperation = () => {
  const operations = ['+', '-', '*'];
  const randomOperation = operations[getNumber(0, 3)];
  return randomOperation;
};

const isCalc = (firstNum, secondNum, arrOperation) => {
  let calc;
  switch (arrOperation) {
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
  const currentOperation = genOperation();
  const question = (`${firstNum} ${currentOperation} ${secondNum}`);
  return question;
};

const createSysAnswerForCalcGame = (question) => {
  const arrFromquest = question.split(' ');
  const firstNum = Number(arrFromquest[0]);
  const secondNum = Number(arrFromquest[2]);
  const result = isCalc(firstNum, secondNum, arrFromquest[1]);
  return result;
};

const startCalcGame = () => {
  const description = 'What is the result of the expression?';
  startGame(description, genCalcQuestion, createSysAnswerForCalcGame);
};

export default startCalcGame;
