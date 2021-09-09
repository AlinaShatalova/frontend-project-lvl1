import gameEngine from '../index.js';

const gameDesc = 'Find the greatest common divisor of given numbers.';

const playRound = () => {
  const randomNumberOne = Math.floor(Math.random() * 100) + 1;
  const randomNumberTwo = Math.floor(Math.random() * 100) + 1;

  let arr = [randomNumberOne, randomNumberTwo];
  let size = arr.length;

  if (randomNumberOne < randomNumberTwo) {
    arr = [randomNumberTwo, randomNumberOne];
  }

  for (let i = 0; i < size; i += 1) {
    const mod = (arr[i] % arr[i + 1]);
    arr.push(mod);
    size += 1;
    if (mod === 0) {
      break;
    }
  }

  const rightAnswer = String(arr[size - 2]);
  const question = `Question: ${randomNumberOne} ${randomNumberTwo}`;
  return [question, rightAnswer];
};

const playGame = () => gameEngine(playRound, gameDesc);

export default playGame;
