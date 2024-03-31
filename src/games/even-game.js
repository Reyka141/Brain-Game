import {
  getNumber, isEven, startGame,
} from '../index.js';

const evenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(description, getNumber, isEven);
};

export default evenGame;
