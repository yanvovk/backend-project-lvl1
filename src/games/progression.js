import random from '../random.js';
import run from '../index.js';

const task = (len = 10, min = 0, max = 100) => {
  const taskObj = {};
  const first = random(min, max);
  const delta = random(0, 10);
  const blankIndex = random(0, len - 1);
  const progression = [];
  for (let i = 0, j = first; i < len; i += 1, j += delta) {
    progression.push(j);
  }
  const answer = progression[blankIndex];
  progression[blankIndex] = '..';
  taskObj.question = progression.toString().replace(/,/g, ' ');
  taskObj.rightAnswer = answer.toString();
  return taskObj;
};

const question = 'What number is missing in the progression?';

export default () => run(question, task);
