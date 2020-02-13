import hello from './index.js';
import random from './random.js';
import run from './run.js';

const question = () => {
  const num = random(100);
  return num;
};

const rigthAnswer = (num) => {
  if(4 > num > 0) {
    return 'yes';
  }
  if(num % 2 == 0 || num % 3 == 0) {
    return 'no';  
  }
  const sqrt = Math.sqrt(num);
  for(let i = 5; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default () => {
  const playerName = hello();
  console.log('What is the result of the expression?');
  run(playerName, question, rigthAnswer);
};
