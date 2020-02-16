import run from '../index.js';
import random from '../random.js';

let a;
let b;
let randOperator;

const question = (min = 0, max = 10) => {
  a = random(min, max);
  b = random(min, max);
  const operations = ['+', '*', '-'];
  randOperator = operations[random(0, 3)];
  return `${a} ${randOperator} ${b}`;
};

const rigthAnswer = () => {
  const functions = {
    '+': (a, b) => a + b,
    '*': (a, b) => a * b,
    '-': (a, b) => a - b,
  };
  return functions[randOperator](a, b);
};

export default () => {
  const task = 'What is the result of the expression?';
  run(task, question, rigthAnswer);
};
