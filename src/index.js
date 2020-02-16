import readlineSync from 'readline-sync';

export default (task, question, rigthAnswer) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${playerName}!`);
  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const q = question();
    const r = rigthAnswer(q).toString();
    console.log(`Question: ${q}`);
    const playerAnswer = readlineSync.question('Your answer:');
    if (playerAnswer !== r) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was "${r}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}`);
};
