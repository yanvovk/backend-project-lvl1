import random from '../random.js';
import run from '../index.js';

const minForRandom = 0;
const maxForRandom = 100;
const progressionLength = 10;

const generateTask = () => {
  const task = {};
  const first = random(minForRandom, maxForRandom);
  const delta = random(0, 10);
  const blankIndex = random(0, progressionLength - 1);
  const progression = [];
  for (let i = 0, j = first; i < progressionLength; i += 1, j += delta) {
    progression.push(j);
  }
  const answer = progression[blankIndex];
  progression[blankIndex] = '..';
  task.question = progression.toString().replace(/,/g, ' ');
  task.rightAnswer = answer.toString();
  return task;
};

const question = 'What number is missing in the progression?';

export default () => run(question, generateTask);
