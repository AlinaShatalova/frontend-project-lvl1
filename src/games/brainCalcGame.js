import gameEngine from '../index.js';

const gameDesc = 'What is the result of the expression?';

const playRound = () => {
  const randomNumberOne = Math.floor(Math.random() * 100) + 1;
  const randomNumberTwo = Math.floor(Math.random() * 100) + 1;

  const operators = ['+', '-', '*'];

  const randomOperatorsIndex = Math.floor(Math.random() * 3);
  const randomOperator = operators[randomOperatorsIndex];

  let rightAnswer = 0;

  switch (randomOperatorsIndex) {
    case 0:
      rightAnswer = String(randomNumberOne + randomNumberTwo);
      break;
    case 1:
      rightAnswer = String(randomNumberOne - randomNumberTwo);
      break;
    case 2:
      rightAnswer = String(randomNumberOne * randomNumberTwo);
      break;
    default:
      break;
  }

  const question = `Question: ${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;

  return [question, rightAnswer];
};

const playGame = () => gameEngine(playRound, gameDesc);

export default playGame;
