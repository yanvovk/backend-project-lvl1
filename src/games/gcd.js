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
  const a = random(minForRandom, maxForRandom);
  const b = random(minForRandom, maxForRandom);
  const question = `${a} ${b}`;
  const rightAnswer = gcdFinder(a, b).toString();
  return {question, rightAnswer};
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => run(description, generateTask);
