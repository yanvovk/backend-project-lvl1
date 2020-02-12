import readlineSync from 'readline-sync';

let playerName;

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  playerName = name;
  console.log(`Hello, ${playerName}!`);
};

export const player = playerName;
