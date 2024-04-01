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
  arrOperation[index] = '..';
  return arrOperation.join(' ');
};

const calcProgresNum = (question) => {
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

const startProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  startGame(description, genProgresQuestion, calcProgresNum);
};

export default startProgressionGame;
