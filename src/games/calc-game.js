import readlineSync from 'readline-sync';
import { getNumber, printAnswer } from '../index.js';

const genArrOperation = () => {
  const operations = ['+', '-', '*'];
  const arr = [];
  const temp = [];
  while (arr.length < 3) {
    const randNum = Math.floor(Math.random() * 3);
    if (!temp.includes(randNum)) {
      temp.push(randNum);
      arr.push(operations[randNum]);
    }
  }
  return arr;
};

const isCalc = (firstNum, secondNum, arrOperation, userAnswer) => {
  let calc;
  switch (arrOperation) {
    case '+':
      calc = firstNum + secondNum;
      break;
    case '-':
      calc = firstNum - secondNum;
      break;
    case '*':
      calc = firstNum * secondNum;
      break;
    default:
      calc = 'error';
  }
  const answer = printAnswer(calc.toString(), userAnswer);
  return answer;
};

const calcGame = (userName) => {
  const arrOperation = genArrOperation();
  for (let i = 0; i < 3; i += 1) {
    const firstNum = getNumber();
    const secondNum = getNumber();
    const question = (`${firstNum} ${arrOperation[i]} ${secondNum}`);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = isCalc(firstNum, secondNum, arrOperation[i], userAnswer);
    if (result === 'Correct!') {
      console.log(result);
    } else {
      console.log(result);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default calcGame;
