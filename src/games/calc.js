import run from '../index.js';
import random from '../random.js';

const task = (min = 0, max = 10) => {
  const taskObj = {};
  const a = random(min, max);
  const b = random(min, max);
  const operations = ['+', '*', '-'];
  const randOperator = operations[random(0, operations.length - 1)];
  taskObj.question = `${a} ${randOperator} ${b}`;
  const functions = {
    '+': (n, m) => n + m,
    '*': (n, m) => n * m,
    '-': (n, m) => n - m,
  };
  taskObj.rightAnswer = functions[randOperator](a, b).toString();
  return taskObj;
};

const question = 'What is the result of the expression?';

export default () => {
  run(question, task);
};
