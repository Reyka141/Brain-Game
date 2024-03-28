import readlineSync from 'readline-sync';
import { getNumber, printAnswer } from '../index.js';

const isEven = (systemNumber, userAnswer) => {
  const systemAnswer = (systemNumber % 2 === 0) ? 'yes' : 'no';
  const answer = printAnswer(systemAnswer, userAnswer);
  return answer;
};

const evenGame = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const number = getNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = isEven(number, userAnswer);
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

export default evenGame;
