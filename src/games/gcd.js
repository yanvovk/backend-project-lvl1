import random from '../random.js';
import run from '../index.js';

let a = 0;
let b = 0;

const question = (min = 0, max = 100) => {
  a = random(min, max);
  b = random(min, max);
  return `${a} ${b}`;
};

const gcdFinder = () => {
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
  const task = 'Find the greatest common divisor of given numbers.';
  run(task, question, gcdFinder);
};
