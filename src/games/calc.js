import run from '../index.js';
import random from '../random.js';

const operations = {
  '+': (n, m) => n + m,
  '*': (n, m) => n * m,
  '-': (n, m) => n - m,
};

const minForRandom = 0;
const maxForRandom = 10;

const generateTask = () => {
  const a = random(minForRandom, maxForRandom);
  const b = random(minForRandom, maxForRandom);
  const operators = Object.keys(operations);
  const randOperator = operators[random(0, operators.length - 1)];
  const question = `${a} ${randOperator} ${b}`;
  const rightAnswer = operations[randOperator](a, b).toString();
  return { question, rightAnswer };
};

const description = 'What is the result of the expression?';

export default () => run(description, generateTask);
