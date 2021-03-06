import gameEngine from '../index.js';

const gameDesc = 'What number is missing in the progression?';

const playRound = () => {
  const randomArrSize = Math.floor(Math.random() * 6 + 5);
  const d = Math.floor(Math.random() * 11) + 1;
  const a1 = Math.floor(Math.random() * 101 + 1);
  const randomReplace = Math.floor(Math.random() * randomArrSize);
  const arr = [a1];

  for (let i = 0; i < randomArrSize; i += 1) {
    arr.push(arr[i] + d);
  }

  const rightAnswer = String(arr[randomReplace]);
  arr[randomReplace] = '..';
  const question = `Question: ${arr.join(' ')}`;

  return [question, rightAnswer];
};

const playGame = () => gameEngine(playRound, gameDesc);

export default playGame;
