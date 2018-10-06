import game from '..';
import generateNum from '../utils';
import { cons } from 'hexlet-pairs';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const max = 100;
const min = 1;

export const getConditions = () => {
  const task = generateNum(min, max);
  const correctAnswer = isEven(task) ? 'yes' : 'no';
  return cons(task, correctAnswer);
};

export default () => game(rule, getConditions);
