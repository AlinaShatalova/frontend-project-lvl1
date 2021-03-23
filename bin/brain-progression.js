#!/usr/bin/env node
import readlineSync from 'readline-sync';

let bool = 0;

const greeting = () => { // приветствие
  const userName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const userName = greeting(); // вызов функции приветствия
console.log('What number is missing in the progression?');

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
  const randomArrSize = Math.floor(Math.random() * 6 + 5);
  const d = Math.floor(Math.random() * 11) + 1;
  const a1 = Math.floor(Math.random() * 101 + 1);
  const randomReplace = Math.floor(Math.random() * randomArrSize);
  const arr = [a1];
  for (let i = 0; i < randomArrSize; i += 1) {
    arr.push(arr[i] + d);
  }
  const rightAnswer = arr[randomReplace];
  arr[randomReplace] = '..';
  console.log(`Question: ${arr.join(' ')}`);
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
