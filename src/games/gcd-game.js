import startGame from '../index.js';
import getNumber from '../gen-num.js';

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

const generateQuestionForGcdGame = () => {
  const firstNum = getNumber();
  const secondNum = getNumber();
  const question = (`${firstNum} ${secondNum}`);
  return question;
};

const createSysAnswerForGcdGame = (question) => {
  const arrFromquest = question.split(' ');
  const firstNum = Number(arrFromquest[0]);
  const secondNum = Number(arrFromquest[1]);
  const result = hasNod(firstNum, secondNum);
  return result;
};

const startGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  startGame(description, generateQuestionForGcdGame, createSysAnswerForGcdGame);
};

export default startGcdGame;
