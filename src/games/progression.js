import random from '../random.js';
import run from '../index.js';

let progression;
let deltaG;

const question = (len = 10, min = 0, max = 100) => {
  const first = random(min, max);
  const delta = random(0, 10);
  deltaG = delta;
  const blankIndex = random(0, len);
  const arr = [];
  for (let i = 0, j = first; i < len; i += 1, j += delta) {
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
  } else {
    answer = progression[0] + deltaG * blankIndex;
  }  
  return answer;
};

export default () => {
  const task = 'What is the result of the expression?';
  run(task, question, rigthAnswer);
};
