import readlineSync from 'readline-sync';

const roundCount = 3;

export default (taskText, generateTask) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${playerName}!`);
  console.log(taskText);
  for (let i = 0; i < roundCount; i += 1) {
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
