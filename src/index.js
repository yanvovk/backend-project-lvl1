import readlineSync from 'readline-sync';

export default (taskText, generateTask) => {
  const roundCounter = 3;
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${playerName}!`);
  console.log(taskText);
  for (let i = 0; i < roundCounter; i += 1) {
    const { question, rightAnswer } = generateTask();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer:');
    if (playerAnswer !== rightAnswer) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}`);
};
