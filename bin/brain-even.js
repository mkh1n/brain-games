#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let score = 0;
const answers = ['yes', 'no'];

for (let i = 0; i < 3; i += 1) {
  const num = Math.floor(Math.random() * 100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('');
  if (answer === answers[num % 2]) {
    console.log('Correct!');
    score += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answers[num % 2]}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
if (score === 3) {
  console.log(`Congratulations, ${name}!`);
}
