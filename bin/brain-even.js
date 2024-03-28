#!/usr/bin/env node
import sayHello from '../src/cli.js';
import evenGame from '../src/even-game.js';

console.log('Welcome to the Brain Games!');
const userName = sayHello();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
evenGame(userName);
