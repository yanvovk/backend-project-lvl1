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
  const task = {};
  const a = random(minForRandom, maxForRandom);
  const b = random(minForRandom, maxForRandom);
  const operators = Object.keys(operations);
  const randOperator = operators[random(0, operators.length - 1)];
  task.question = `${a} ${randOperator} ${b}`;
  task.rightAnswer = operations[randOperator](a, b).toString();
  return task;
};

const question = 'What is the result of the expression?';

export default () => run(question, generateTask);
