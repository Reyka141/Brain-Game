import {
  getNumber, isPrime, startGame,
} from '../index.js';

const primeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(description, getNumber, isPrime);
};

export default primeGame;
