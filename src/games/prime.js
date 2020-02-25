import run from '../index.js';
import random from '../random.js';

const isPrime = (n) => {
  if (n === 2 || n === 3) {
    return true;
  }
  if (n % 2 === 0 || n < 2) {
    return false;
  }
  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const minForRandom = 0;
const maxForRandom = 100;

const generateTask = () => {
  const question = random(minForRandom, maxForRandom);
  const rightAnswer = (isPrime(question) ? 'yes' : 'no');
  return {question, rightAnswer};
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => run(description, generateTask);
