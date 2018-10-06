import game from '..';
import generateNum from '../utils';
import { cons } from 'hexlet-pairs';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a * b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return Math.abs(a + b);
};

const max = 100;
const min = 1;

export const getConditions = () => {
  const arg1 = generateNum(min, max);
  const arg2 = generateNum(min, max);
  const task = `${arg1} ${arg2}`;
  const correctAnswer = String(gcd(arg1, arg2));
  return cons(task, correctAnswer);
};

export default () => game(rule, getConditions);
