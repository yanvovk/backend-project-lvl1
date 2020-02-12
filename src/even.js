import {default as hello, player as playerName} from '../src/index.js';
import readlineSync from 'readline-sync';

const randomNum = () => {
    return Math.floor(Math.random() * Math.floor(1000000000));
};

const isEven = (num) => {
    let answer = {yes: 'yes', no: 'no'};
    return num % 2 > 0 ? answer.no : answer.yes;
}



export default () => {
    hello();
    console.log('Answer "yes" if the number is even, otherwise answer "no"')
    for(let i = 0; i < 3; i += 1) {
      let num = randomNum();
      let right_answer = isEven(num);
      console.log(`Question: ${num}`);
      let player_answer = readlineSync.question('Your answer:');
      if(player_answer !== right_answer) {
          console.log(`${player_answer} is wrong answer ;(. Correct answer was "${right_answer}".`);
          console.log(`Let's try again, ${playerName}!`);
          break;
      };
      console.log('Correct!');
      if(i === 2) {
          console.log(`Congratulations, ${playerName}`);
      };
    };
    return;
}
