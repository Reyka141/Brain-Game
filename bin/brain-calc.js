#!/usr/bin/env node
import sayHello from '../src/cli.js';
import calcGame from '../src/games/calc-game.js';

console.log('Welcome to the Brain Games!');
const userName = sayHello();
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');
calcGame(userName);
