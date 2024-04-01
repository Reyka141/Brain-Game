import readlineSync from 'readline-sync';
import sayHello from './cli.js';

const startGame = (description, quest, systemAnswer) => {
  const userName = sayHello();
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const questionForUser = quest();
    const sysAnswer = systemAnswer(questionForUser);
    console.log(`Question: ${questionForUser}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (sysAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${sysAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default startGame;
