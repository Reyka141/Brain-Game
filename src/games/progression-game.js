import startGame from '../index.js';
import getNumber from '../gen-num.js';

const genProgresQuestion = () => {
  const lengthOfArr = getNumber(5, 12);
  const progression = getNumber(2, 10);
  let startNum = getNumber(1, 50);
  const arrOperation = [startNum];
  for (let i = 1; i < lengthOfArr; i += 1) {
    startNum += progression;
    arrOperation.push(startNum);
  }
  const index = getNumber(0, arrOperation.length - 1);
  const answer = arrOperation[index].toString();
  arrOperation[index] = '..';
  const question = arrOperation.join(' ');
  return [question, answer];
};

const startProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  startGame(description, genProgresQuestion);
};

export default startProgressionGame;
