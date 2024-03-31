import {
  startGame, genCalcQuestion, createSysAnswerForCalcGame,
} from '../index.js';

const calcGame = () => {
  const description = 'What is the result of the expression?';
  startGame(description, genCalcQuestion, createSysAnswerForCalcGame);
};

export default calcGame;
