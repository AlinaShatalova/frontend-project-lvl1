#!/usr/bin/env node
import readlineSync from 'readline-sync';

let bool = 0;

const greeting = () => { // приветствие
  const userName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const userName = greeting(); // вызов функции приветствия
console.log('Find the greatest common divisor of given numbers.');

const errorMessage = (usrAnswer, rghtAnswer) => { // сообщение об ошибке
  bool = 1;
  console.log(`'${usrAnswer}' is wrong answer ;(. Correct answer was '${rghtAnswer}'\nLet's try again, ${userName}!`);
};

const answerCheck = (usrAnswer, rghtAnswer) => { // проверка ответа пользователя
  if (usrAnswer === rghtAnswer) {
    return console.log('Correct!');
  } return errorMessage(usrAnswer, rghtAnswer);
};

const game = () => {
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
  const rightAnswer = arr[size - 2];
  console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
  return rightAnswer;
};

const gameOutput = (usrName, i) => { // вывод поздравления, если игра прошла
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
};

for (let i = 0; i < 3; i += 1) { // цикл игры
  const rightAnswer = game();
  const userAnswer = Number(readlineSync.question('Your answer: '));

  answerCheck(userAnswer, rightAnswer);

  if (bool === 1) {
    break;
  }
  gameOutput(userName, i);
}
