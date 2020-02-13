import hello from '../index.js';
import random from '../random.js';
import run from '../run.js';

let progression;
let deltaG;

const question = () => {
  const first = random(100);
  const delta = random(10);
  deltaG = delta;
  const blankIndex = random(10);
  const arr = [];
  for (let i = 0, j = first; i < 10; i += 1, j += delta) {
    arr.push(j);
  }
  arr[blankIndex] = '..';
  progression = arr;
  return arr.toString().replace(/,/g, ' ');
};

const rigthAnswer = () => {
  let answer = 0;
  const blankIndex = progression.findIndex((e) => e === '..');
  if (blankIndex === 0) {
    answer = progression[1] - deltaG;
  }
  answer = progression[blankIndex - 1] + deltaG;
  return answer.toString();
};

export default () => {
  const playerName = hello();
  console.log('What is the result of the expression?');
  run(playerName, question, rigthAnswer);
};
