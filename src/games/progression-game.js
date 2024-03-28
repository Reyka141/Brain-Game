import {
  getNumber, printAnswer, generateArr, getAnswer, printResult, sayWelcome,
} from '../index.js';

const hideOneIndexOfArr = (arr, index) => {
  const retultArr = [...arr];
  retultArr[index] = '..';
  return retultArr;
};

const progressionGame = () => {
  const userName = sayWelcome();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const arrOperation = generateArr();
    const indexOfArr = getNumber(0, arrOperation.length - 1);
    const question = hideOneIndexOfArr(arrOperation, indexOfArr);
    const userAnswer = getAnswer(question.join(' '));
    const result = printAnswer(arrOperation[indexOfArr], userAnswer);
    if (printResult(result, userName) === false) {
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default progressionGame;
