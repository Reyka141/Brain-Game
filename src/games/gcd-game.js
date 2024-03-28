import readlineSync from 'readline-sync';
import { getNumber, printAnswer, hasNod } from '../index.js';

const gcdGame = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const firstNum = getNumber();
    const secondNum = getNumber();
    const question = (`${firstNum} ${secondNum}`);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const systemAnswer = hasNod(firstNum, secondNum);
    const result = printAnswer(systemAnswer, userAnswer);
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

export default gcdGame;
