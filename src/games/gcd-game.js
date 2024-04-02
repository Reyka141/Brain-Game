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

const genGcdQuestion = () => {
  const firstNum = getNumber();
  const secondNum = getNumber();
  const question = (`${firstNum} ${secondNum}`);
  const answer = hasNod(firstNum, secondNum);
  return [question, answer];
};

const startGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  startGame(description, genGcdQuestion);
};

export default startGcdGame;
