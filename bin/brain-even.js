#!/usr/bin/env node
import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');
let bool = 0;

const errorMessage = (usrAnswer, rghtAnswer) => { // сообщение об ошибке
  bool = 1;
  console.log(`'${usrAnswer}' is wrong answer ;(. Correct answer was ${rghtAnswer}'\nLet's try again, ${userName}!`);
};

const answerCheck = (usrAnswer, rghtAnswer) => { // проверка ответа пользователя
  if (usrAnswer === rghtAnswer) {
    return console.log('Correct!');
  } return errorMessage(usrAnswer, rghtAnswer);
};

for (let i = 0; i < 3; i += 1) { // цикл игры
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let rightAnswer = 'no';
  if (randomNumber % 2 === 0) {
    rightAnswer = 'yes';
  }
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  answerCheck(userAnswer, rightAnswer);
  if (bool === 1) {
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
