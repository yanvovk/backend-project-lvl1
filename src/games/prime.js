import run from '../index.js';
import random from '../random.js';

const task = (min = 0, max = 100) => {
  const taskObj = {};
  const num = random(min, max);
  taskObj.question = num;

  const isPrime = (n) => {
    if (n > 1 && n < 4) {
      return true;
    }
    if (n % 2 === 0 || n % 3 === 0 || n === 1) {
      return false;
    }
    const sqrt = Math.sqrt(n);
    for (let i = 5; i <= sqrt; i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  const right = (n) => {
    if (isPrime(n)) {
      return 'yes';
    }
    return 'no';
  };

  taskObj.rightAnswer = right(num);
  return taskObj;
};

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  run(question, task);
};
