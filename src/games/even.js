import run from '../index.js';
import random from '../random.js';

const isEven = (n) => (n % 2 === 0);

const minForRandom = 0;
const maxForRandom = 100;

const generateTask = () => {
  const task = {};
  const num = random(minForRandom, maxForRandom);
  task.question = num;
  const answerRightly = (n) => (isEven(n) ? 'yes' : 'no');
  task.rightAnswer = answerRightly(num);
  return task;
};

const question = 'Answer "yes" if the number is even, otherwise answer "no"';

export default () => run(question, generateTask);
