import random from '../random.js';
import run from '../index.js';

const task = (min = 0, max = 100) => {
  const taskObj = {};
  const a = random(min, max);
  const b = random(min, max);
  taskObj.question = `${a} ${b}`;
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
  taskObj.rightAnswer = gcdFinder(a, b).toString();
  return taskObj;
};

const question = 'Find the greatest common divisor of given numbers.';

export default () => {
  run(question, task);
};
