import { generateNum, game } from '..';
import { cons } from 'hexlet-pairs';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 0 || num === 1) {
    return false;
  }
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const max = 100;

export const getConditions = () => {
  const task = generateNum(max);
  const correctAnswer = isPrime(task) ? 'yes' : 'no';
  return cons(task, correctAnswer);
};

export default () => game(rule, getConditions);
