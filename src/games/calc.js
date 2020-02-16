import run from '../index.js';
import random from '../random.js';

const question = (min = 0, max = 10) => {
  const a = random(min, max);
  const b = random(min, max);
  const operations = ['+', '*', '-'];
  const randOperator = operations[random(0, 3)];
  return `${a} ${randOperator} ${b}`;
};

const rigthAnswer = (strExp) => {
  const operatorAndOperands = strExp.split(' ');
  const first = Number(operatorAndOperands[0]);
  const second = Number(operatorAndOperands[2]);
  const oper = operatorAndOperands[1];
  const functions = {
    '+': (a, b) => a + b,
    '*': (a, b) => a * b,
    '-': (a, b) => a - b,
  };
  return functions[oper](first, second);
};

export default () => {
  const task = 'What is the result of the expression?';
  run(task, question, rigthAnswer);
};
