import {
  getNumber, printAnswer, getAnswer, printResult, sayWelcome,
} from '../index.js';

const isPrime = (num) => {
  let temp = true;
  for (let i = 2; i < (num / 2); i += 1) {
    if (num % i === 0) {
      temp = false;
      break;
    }
  }
  const result = (temp === true) ? 'yes' : 'no';
  return result;
};
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
