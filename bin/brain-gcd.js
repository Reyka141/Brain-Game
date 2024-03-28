#!/usr/bin/env node
import sayHello from '../src/cli.js';
import gcdGame from '../src/games/gcd-game.js';

console.log('Welcome to the Brain Games!');
const userName = sayHello();
console.log(`Hello, ${userName}!`);
console.log('Find the greatest common divisor of given numbers.');
gcdGame(userName);
