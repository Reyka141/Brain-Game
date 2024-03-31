import {
  startGame, generateQuestionForProgressionGame, createSysAnswerProgressionGame,
} from '../index.js';

const progressionGame = () => {
  const description = 'What number is missing in the progression?';
  startGame(description, generateQuestionForProgressionGame, createSysAnswerProgressionGame);
};

export default progressionGame;
