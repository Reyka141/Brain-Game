import {
  getNumber, printAnswer, getAnswer, printResult, sayWelcome, hasNod,
} from '../index.js';

const gcdGame = () => {
  const userName = sayWelcome();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const firstNum = getNumber();
    const secondNum = getNumber();
    const question = (`${firstNum} ${secondNum}`);
    const userAnswer = getAnswer(question);
    const systemAnswer = hasNod(firstNum, secondNum);
    const result = printAnswer(systemAnswer, userAnswer);
    if (printResult(result, userName) === false) {
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gcdGame;
