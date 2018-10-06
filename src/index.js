import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const gameplay = (conditions, curLevel, attempts) => {
  const condition = conditions();
  const question = car(condition);
  const correctAnswer = cdr(condition);

  if (curLevel > attempts) {
    return true;
  }

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}' `);
    return false;
  }
  return gameplay(conditions, curLevel + 1, attempts);
};

const attempts = 3;
const curLevel = 0;

export default (rule, conditions) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const isWin = gameplay(conditions, curLevel + 1, attempts);
  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
