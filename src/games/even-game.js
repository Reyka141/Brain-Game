import startGame from '../index.js';
import getNumber from '../gen-num.js';

const hasEven = (systemNumber) => {
  const systemAnswer = (systemNumber % 2 === 0) ? 'yes' : 'no';
  return systemAnswer;
};

const genEvenQuestion = () => {
  const question = getNumber();
  const answer = hasEven(question);
  return [question, answer];
};

const startEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(description, genEvenQuestion);
};

export default startEvenGame;
