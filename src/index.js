import readlineSync from 'readline-sync';

const gameEngine = (playRound, gameDesc) => {
  const userName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDesc);

  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = playRound();
    console.log(question);
    const userAnswer = String(readlineSync.question('Your answer: '));

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameEngine;
