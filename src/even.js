import readlineSync from 'readline-sync';
import hello from './index.js';
import random from './random.js';
import run from './run.js';

const randomNum = random(10000);

const isEven = (num) => {
  const answer = { yes: 'yes', no: 'no' };
  return num % 2 > 0 ? answer.no : answer.yes;
};

export default () => {
  const playerName = hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  run(playerName, randomNum, isEven);
};
