import readlineSync from 'readline-sync';

const startGame = (description, quest, systemAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
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
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
