import readlineSync from 'readline-sync';

let playerName;

const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  playerName = name;
  console.log(`Hello, ${playerName}!`);
};


export default hello;
export const player = playerName;
