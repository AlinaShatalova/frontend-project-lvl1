import gameEngine from '../index.js';

const gameDesc = 'Answer "yes" if the number is even, otherwise answer "no"';

const playRound = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let rightAnswer = 'no';
  if (randomNumber % 2 === 0) {
    rightAnswer = 'yes';
  }
  const question = `Question: ${randomNumber}`;
  return [question, rightAnswer];
};

const playGame = () => gameEngine(playRound, gameDesc);

export default playGame;
