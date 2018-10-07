import game from '..';
import generateNum from '../utils';
import { cons } from 'hexlet-pairs';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const absNum = Math.abs(num);
  if (num === 0 || absNum === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(absNum); i += 1) {
    if (absNum % i === 0) {
      return false;
    }
  }
  return true;
};

const max = 100;
const min = -100;

export const getConditions = () => {
  const task = generateNum(min, max);
  const correctAnswer = isPrime(task) ? 'yes' : 'no';
  return cons(task, correctAnswer);
};

export default () => game(rule, getConditions);
