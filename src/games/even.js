import run from '../index.js';
import random from '../random.js';

const randomNum = (min = 0, max = 100) => random(min, max);

const isEven = (num) => num % 2 > 0 ? false : true;

const rigthAnswer = (num) => isEven(num)? 'yes' : 'no';

export default () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no"';
  run(task, randomNum, rigthAnswer);
};
