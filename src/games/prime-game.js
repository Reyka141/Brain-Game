import startGame from '../index.js';
import getNumber from '../gen-num.js';

export const hasPrime = (num) => {
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

const startPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(description, getNumber, hasPrime);
};

export default startPrimeGame;
