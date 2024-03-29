import readlineSync from 'readline-sync';
import sayHello from './cli.js';

const getNumber = (minNum = 1, maxNum = 100) => {
  const generateNumForGame = Math.floor(Math.random() * maxNum) + minNum;
  return generateNumForGame;
};

const printAnswer = (systemAnswer, answerUser) => {
  let answer = '';
  if (systemAnswer === answerUser) {
    answer = 'Correct!';
  } else {
    answer = `'${answerUser}' is wrong answer ;(. Correct answer was '${systemAnswer}'.`;
  }
  return answer;
};

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

const hasNod = (firstNum, secondNum) => {
  let minNum;
  const arrOfDivider = [];
  if (firstNum < secondNum) {
    minNum = firstNum;
  } else {
    minNum = secondNum;
  }
  for (let i = 1; i <= minNum; i += 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      arrOfDivider.push(i);
    }
  }
  const maxOfDivider = arrOfDivider.pop().toString();
  return maxOfDivider;
};

const generateArr = () => {
  const lengthOfArr = getNumber(5, 12);
  const progression = getNumber(2, 10);
  let startNum = getNumber(1, 50);
  const arr = [startNum.toString()];
  for (let i = 1; i < lengthOfArr; i += 1) {
    startNum += progression;
    arr.push(startNum.toString());
  }
  return arr;
};

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const printResult = (result, userName) => {
  if (result === 'Correct!') {
    console.log(result);
  } else {
    console.log(result);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  return true;
};

const sayWelcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = sayHello();
  console.log(`Hello, ${userName}!`);
  return userName;
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
    case '*':
      calc = firstNum * secondNum;
      break;
    default:
      calc = 'error';
  }
  return calc.toString();
};

const isEven = (systemNumber) => {
  const systemAnswer = (systemNumber % 2 === 0) ? 'yes' : 'no';
  return systemAnswer;
};

const hideOneIndexOfArr = (arr, index) => {
  const retultArr = [...arr];
  retultArr[index] = '..';
  return retultArr;
};

const isPrime = (num) => {
  let temp = true;
  for (let i = 2; i < (num / 2); i += 1) {
    if (num % i === 0) {
      temp = false;
      break;
    }
  }
  const result = (temp === true) ? 'yes' : 'no';
  return result;
};

export {
  getNumber, printAnswer, genArrOperation, hasNod, generateArr, getAnswer, printResult,
  sayWelcome, isCalc, isEven, hideOneIndexOfArr, isPrime,
};
