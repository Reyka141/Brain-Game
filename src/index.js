import readlineSync from 'readline-sync';
import sayHello from './cli.js';

export const getNumber = (minNum = 1, maxNum = 100) => {
  const generateNumForGame = Math.floor(Math.random() * maxNum) + minNum;
  return generateNumForGame;
};

export const printAnswer = (systemAnswer, answerUser) => {
  let answer = '';
  if (systemAnswer === answerUser) {
    answer = 'Correct!';
  } else {
    answer = `'${answerUser}' is wrong answer ;(. Correct answer was '${systemAnswer}'.`;
  }
  return answer;
};

export const genOperation = () => {
  const operations = ['+', '-', '*'];
  const randomOperation = operations[Math.floor(Math.random() * 3)];
  return randomOperation;
};

export const hasNod = (firstNum, secondNum) => {
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

export const generateArr = () => {
  const lengthOfArr = getNumber(5, 12);
  const progression = getNumber(2, 10);
  let startNum = getNumber(1, 50);
  const arr = [startNum];
  for (let i = 1; i < lengthOfArr; i += 1) {
    startNum += progression;
    arr.push(startNum);
  }
  return arr;
};

export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const printResult = (result, userName) => {
  if (result === 'Correct!') {
    console.log(result);
  } else {
    console.log(result);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  return true;
};

export const sayWelcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = sayHello();
  return userName;
};

export const isCalc = (firstNum, secondNum, arrOperation) => {
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

export const isEven = (systemNumber) => {
  const systemAnswer = (systemNumber % 2 === 0) ? 'yes' : 'no';
  return systemAnswer;
};

export const hideOneIndexOfArr = (arr, index) => {
  const retultArr = [...arr];
  retultArr[index] = '..';
  return retultArr;
};

export const isPrime = (num) => {
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

export const startGame = (description, quest, systemAnswer) => {
  const userName = sayWelcome();
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const question = quest();
    const sysAnswer = systemAnswer(question);
    const userAnswer = getAnswer(question);
    const result = printAnswer(sysAnswer, userAnswer);
    if (printResult(result, userName) === false) {
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export const generateQuestionForProgressionGame = () => {
  const arrOperation = generateArr();
  const indexOfArr = getNumber(0, arrOperation.length - 1);
  const question = hideOneIndexOfArr(arrOperation, indexOfArr);
  return question.join(' ');
};

export const createSysAnswerProgressionGame = (question) => {
  const arrFromquest = question.split(' ');
  const indexHide = arrFromquest.indexOf('..');
  let progression;
  let result;
  if (indexHide >= arrFromquest.length - 2) {
    progression = Number(arrFromquest[indexHide - 1]) - Number(arrFromquest[indexHide - 2]);
    result = Number(arrFromquest[indexHide - 1]) + progression;
  } else {
    progression = Number(arrFromquest[indexHide + 2]) - Number(arrFromquest[indexHide + 1]);
    result = Number(arrFromquest[indexHide + 1]) - progression;
  }

  return result.toString();
};

export const genCalcQuestion = () => {
  const firstNum = getNumber();
  const secondNum = getNumber();
  const currentOperation = genOperation();
  const question = (`${firstNum} ${currentOperation} ${secondNum}`);
  return question;
};

export const createSysAnswerForCalcGame = (question) => {
  const arrFromquest = question.split(' ');
  const firstNum = Number(arrFromquest[0]);
  const secondNum = Number(arrFromquest[2]);
  const result = isCalc(firstNum, secondNum, arrFromquest[1]);
  return result;
};

export const generateQuestionForGcdGame = () => {
  const firstNum = getNumber();
  const secondNum = getNumber();
  const question = (`${firstNum} ${secondNum}`);
  return question;
};

export const createSysAnswerForGcdGame = (question) => {
  const arrFromquest = question.split(' ');
  const firstNum = Number(arrFromquest[0]);
  const secondNum = Number(arrFromquest[1]);
  const result = hasNod(firstNum, secondNum);
  return result;
};
