#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';

const getNumber = () => {
  const generateNumForGame = Math.floor(Math.random() * 100) + 1;
  return generateNumForGame;
};

const isEven = (systemNumber, answerUser) => {
  let answer = '';
  const result = (systemNumber % 2 === 0) ? 'yes' : 'no';
  if (result === answerUser) {
    answer = 'Correct!';
  } else {
    answer = `'${answerUser}' is wrong answer ;(. Correct answer was '${result}'.`;
  }
  return answer;
};

console.log('Welcome to the Brain Games!');
const userName = sayHello();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const number = getNumber();
  console.log(`Question: ${number}`);
  const answerUser = readlineSync.question('Your answer: ');
  if (isEven(number, answerUser) === 'Correct!') {
    console.log(isEven(number, answerUser));
  } else {
    console.log(isEven(number, answerUser));
    console.log(`Let's try again, ${userName}!`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
