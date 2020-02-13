import hello from '../index.js';
import random from '../random.js';
import run from '../run.js';

const question = () => {
  const a = random(100);
  const b = random(100);
  const operations = ['+', '*', '-'];
  const randOperator = operations[random(3)];
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
  return functions[oper](first, second).toString();
};

export default () => {
  const playerName = hello();
  console.log('What is the result of the expression?');
  run(playerName, question, rigthAnswer);
};
