import random from '../random.js';
import run from '../index.js';

const task = (min = 0, max = 100) => {
  const taskObj = {};
  const a = random(min, max);
  const b = random(min, max);
  taskObj.question = `${a} ${b}`;
  const gcdFinder = (m, n) => {
    while (m !== 0 && n !== 0) {
      if (m > n) {
        m %= n;
      } else {
        n %= m;
      }
    }
    const gcd = m + n;
    return gcd;
  };
  taskObj.rightAnswer = gcdFinder(a, b).toString();
  return taskObj;
};

const question = 'Find the greatest common divisor of given numbers.';

export default () => {
  run(question, task);
};
