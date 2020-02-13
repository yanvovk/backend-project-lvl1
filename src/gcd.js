import hello from './index.js';
import random from './random.js';
import run from './run.js';

const question = () => {
  const a = random(100);
  const b = random(100);
  return `${a} ${b}`;
};

const gcdFinder = (str) => {
  const [a, b] = str.split(' ');
  let n = Number(a);
  let m = Number(b);
  while (n !== 0 && m !== 0) {
    if (n > m) {
      n %= m;
    } else {
      m %= n;
    }
  }
  const gcd = n + m;
  return gcd.toString();
};

export default () => {
  const playerName = hello();
  console.log('What is the result of the expression?');
  run(playerName, question, gcdFinder);
};
