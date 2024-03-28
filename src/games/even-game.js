import {
  getNumber, printAnswer, getAnswer, printResult, sayWelcome,
} from '../index.js';

const isEven = (systemNumber) => {
  const systemAnswer = (systemNumber % 2 === 0) ? 'yes' : 'no';
  return systemAnswer;
};

const evenGame = () => {
  const userName = sayWelcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const question = getNumber();
    const systemAnswer = isEven(question);
    const userAnswer = getAnswer(question);
    const result = printAnswer(systemAnswer, userAnswer);
    if (printResult(result, userName) === false) {
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default evenGame;
