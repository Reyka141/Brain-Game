import {
  getNumber, printAnswer, genArrOperation, getAnswer, printResult, sayWelcome, isCalc,
} from '../index.js';

const calcGame = () => {
  const userName = sayWelcome();
  console.log('What is the result of the expression?');
  const arrOperation = genArrOperation();
  for (let i = 0; i < 3; i += 1) {
    const firstNum = getNumber();
    const secondNum = getNumber();
    const question = (`${firstNum} ${arrOperation[i]} ${secondNum}`);
    const userAnswer = getAnswer(question);
    const systemAnswer = isCalc(firstNum, secondNum, arrOperation[i]);
    const result = printAnswer(systemAnswer, userAnswer);
    if (printResult(result, userName) === false) {
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default calcGame;
