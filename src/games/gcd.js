import random from '../random.js';
import run from '../index.js';

let a = 0;
let b = 0;

const question = () => {
  a = random();
  b = random();
  return `${a} ${b}`;
};

const gcdFinder = (str) => {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  const gcd = a + b;
  return gcd;
};

export default () => {
  const task = 'What is the result of the expression?';
  run(task, question, gcdFinder);
};
