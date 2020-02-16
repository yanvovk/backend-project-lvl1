import run from '../index.js';
import random from '../random.js';

const randomNum = (min = 0, max = 100) => random(min, max);

const isEven = (num) => {
  if (num % 2 > 0) {
    return false;
  }
  return true;
};

const rigthAnswer = (num) => {
  if (isEven(num)) {
    return 'yes';
  }
  return 'no';
};

export default () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no"';
  run(task, randomNum, rigthAnswer);
};
