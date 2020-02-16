import run from '../index.js';
import random from '../random.js';

const randomNum = (min = 0, max = 100) => random(min, max);

const isPrime = (num) => {
  if (num > 0 && num < 4) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  const sqrt = Math.sqrt(num);
  for (let i = 5; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const rigthAnswer = (num) => {
  if(isPrime(num)) {
    return 'yes';
  }
  return 'no';
}; 

export default () => {
  const task = 'What is the result of the expression?';
  run(task, randomNum, rigthAnswer);
};
