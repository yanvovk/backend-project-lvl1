export default (playerName, question, rigthAnswer) => {
    for (let i = 0; i < 3; i += 1) {
        const q = question();
        const r = rigthAnswer(q);
        console.log(`Question: ${q}`);
        const playerAnswer = readlineSync.question('Your answer:');
        if (playerAnswer !== r) {
          console.log(`${playerAnswer} is wrong answer ;(. Correct answer was "${r}".`);
          console.log(`Let's try again, ${playerName}!`);
          break;
        };
        console.log('Correct!');
        if (i === 2) {
          console.log(`Congratulations, ${playerName}`);
        };
    }
};