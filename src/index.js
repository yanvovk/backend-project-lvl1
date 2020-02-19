import readlineSync from 'readline-sync';

export default (taskText, taskFunction, attempts = 3) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${playerName}!`);
  console.log(taskText);
  for (let i = 0; i < attempts; i += 1) {
    const task = taskFunction();
    console.log(`Question: ${task.question}`);
    const playerAnswer = readlineSync.question('Your answer:');
    if (playerAnswer !== task.rightAnswer) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was "${task.rightAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}`);
};
