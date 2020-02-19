import run from '../index.js';
import random from '../random.js';

const task = (min = 0, max = 100) => {
  const taskObj = {};
  const isEven = (n) => {
    if (n % 2 > 0) {
      return false;
    }
    return true;
  };
  const num = random(min, max);
  taskObj.question = num;
  const right = (n) => {
    if (isEven(n)) {
      return 'yes';
    }
    return 'no';
  };
  taskObj.rightAnswer = right(num);
  return taskObj;
};

const question = 'Answer "yes" if the number is even, otherwise answer "no"';

export default () => {
  run(question, task);
};
