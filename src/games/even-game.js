import startGame from '../index.js';
import getNumber from '../gen-num.js';

const hasEven = (systemNumber) => {
  const systemAnswer = (systemNumber % 2 === 0) ? 'yes' : 'no';
  return systemAnswer;
};

const startEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(description, getNumber, hasEven);
};

export default startEvenGame;
