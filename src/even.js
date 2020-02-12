import readlineSync from 'readline-sync';
import { default as hello, player as playerName } from './index.js';

const randomNum = () => Math.floor(Math.random() * Math.floor(1000000000));

const isEven = (num) => {
  const answer = { yes: 'yes', no: 'no' };
  return num % 2 > 0 ? answer.no : answer.yes;
};

export default () => {
  hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const num = randomNum();
    const rightAnswer = isEven(num);
    console.log(`Question: ${num}`);
    const playerAnswer = readlineSync.question('Your answer:');
    if (playerAnswer !== rightAnswer) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${playerName}`);
    }
  }
};
