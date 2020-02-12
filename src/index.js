import readlineSync from 'readline-sync';

const player;

export default () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name?');
  player = playerName;
  console.log(`Hello, ${playerName}!`);
};

export player;
