export const gameQuestion = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export const playRound = () => {
  let rightAnswer = 'yes';
  const randomNumber = Math.floor(Math.random() * 101 + 1);
  for (let i = 2; i <= randomNumber / 2; i += 1) {
    if (randomNumber % i === 0) {
      rightAnswer = 'no';
      break;
    }
  }
  const question = `Question: ${randomNumber}`;
  return [question, rightAnswer];
};
