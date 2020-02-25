import run from '../index.js';
import random from '../random.js';

const isEven = (n) => (n % 2 === 0);

const minForRandom = 0;
const maxForRandom = 100;

const generateTask = () => {
  const question = random(minForRandom, maxForRandom);
  const rightAnswer = (isEven(question) ? 'yes' : 'no');
  return {question, rightAnswer};
};

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

export default () => run(description, generateTask);
