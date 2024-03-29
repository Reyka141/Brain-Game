import {
  getNumber, printAnswer, getAnswer, printResult, sayWelcome, isPrime,
} from '../index.js';

const primeGame = () => {
  const userName = sayWelcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const question = getNumber(2, 97);
    const userAnswer = getAnswer(question);
    const systemAnswer = isPrime(question);
    const result = printAnswer(systemAnswer, userAnswer);
    if (printResult(result, userName) === false) {
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default primeGame;
