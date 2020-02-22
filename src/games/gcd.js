import random from '../random.js';
import run from '../index.js';

const gcdFinder = (m, n) => {
  let c = m;
  let d = n;
  while (c !== 0 && d !== 0) {
    if (c > d) {
      c %= d;
    } else {
      d %= c;
    }
  }
  const gcd = c + d;
  return gcd;
};

const minForRandom = 0;
const maxForRandom = 100;

const generateTask = () => {
  const task = {};
  const a = random(minForRandom, maxForRandom);
  const b = random(minForRandom, maxForRandom);
  task.question = `${a} ${b}`;
  task.rightAnswer = gcdFinder(a, b).toString();
  return task;
};

const question = 'Find the greatest common divisor of given numbers.';

export default () => run(question, generateTask);
