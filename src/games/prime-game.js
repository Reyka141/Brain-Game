import startGame from '../index.js';
import getNumber from '../gen-num.js';

const hasPrime = (num) => {
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

const genPrimeQuestion = () => {
  const question = getNumber();
  const answer = hasPrime(question);
  return [question, answer];
};

const startPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(description, genPrimeQuestion);
};

export default startPrimeGame;
