#!/usr/bin/env node
import readlineSync from 'readline-sync';

let bool = 0;

const greeting = () => { // приветствие
  const userName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const userName = greeting(); // вызов функции приветствия
console.log('Answer "yes" if the number is even, otherwise answer "no"');

const errorMessage = (usrAnswer, rghtAnswer) => { // сообщение об ошибке
  bool = 1;
  console.log(`'${usrAnswer}' is wrong answer ;(. Correct answer was '${rghtAnswer}'\nLet's try again, ${userName}!`);
};

const answerCheck = (usrAnswer, rghtAnswer) => { // проверка ответа пользователя
  if (usrAnswer === rghtAnswer) {
    return console.log('Correct!');
  } return errorMessage(usrAnswer, rghtAnswer);
};

const game = () => { //  функция игры
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let rightAnswer = 'no';
  if (randomNumber % 2 === 0) {
    rightAnswer = 'yes';
  }
  console.log(`Question: ${randomNumber}`);
  return rightAnswer;
};

const gameOutput = (usrName, i) => { // вывод поздравления, если игра прошла
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
};

for (let i = 0; i < 3; i += 1) { // цикл игры
  const rightAnswer = game();
  const userAnswer = readlineSync.question('Your answer: ');

  answerCheck(userAnswer, rightAnswer);
  if (bool === 1) {
    break;
  }
  gameOutput(userName, i);
}
