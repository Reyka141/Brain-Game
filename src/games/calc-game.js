import startGame from '../index.js';
import getNumber from '../gen-num.js';

const calcNum = (firstNum, secondNum, currentOperation) => {
  let calc;
  switch (currentOperation) {
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
  const answer = calcNum(firstNum, secondNum, currentOperation);
  return [question, answer];
};

const startCalcGame = () => {
  const description = 'What is the result of the expression?';
  startGame(description, genCalcQuestion);
};

export default startCalcGame;
