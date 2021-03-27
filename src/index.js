import readlineSync from 'readline-sync';

const gameEngine = (playRound, gameQuestion) => {
  let bool = 0;
  const greeting = () => { // приветствие
    const userName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
    console.log(`Hello, ${userName}!`);
    return userName; // нужно ли возвращать имя пользователя?
  };
  const userName = greeting();

  gameQuestion();

  const errorMessage = (usrAnswer, rghtAnswer) => { // сообщение об ошибке
    bool = 1;
    console.log(`'${usrAnswer}' is wrong answer ;(. Correct answer was '${rghtAnswer}'\nLet's try again, ${userName}!`);
  };
  const answerCheck = (usrAnswer, rghtAnswer) => { // проверка ответа пользователя
    if (usrAnswer === rghtAnswer) {
      return console.log('Correct!');
    } return errorMessage(usrAnswer, rghtAnswer);
  };

  const gameOutput = (usrName, i) => { // вывод поздравления, если игра прошла
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  };

  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = playRound();
    console.log(question);

    let userAnswer = readlineSync.question('Your answer: ');
    if ((userAnswer !== 'no') && (userAnswer !== 'yes')) {
      userAnswer = Number(userAnswer);
    }

    answerCheck(userAnswer, rightAnswer);
    if (bool === 1) {
      break;
    }
    gameOutput(userName, i);
  }
};
export default gameEngine;
