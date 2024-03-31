import {
  startGame, generateQuestionForGcdGame, createSysAnswerForGcdGame,
} from '../index.js';

const gcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  startGame(description, generateQuestionForGcdGame, createSysAnswerForGcdGame);
};

export default gcdGame;
