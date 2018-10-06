import game from '..';
import generateNum from '../utils';
import { cons } from 'hexlet-pairs';

const rule = 'What number is missing in this progression?';

const length = 10;

const getConditions = () => {
  let max = 20;
  const min = 1;
  const firstNum = generateNum(min, max);
  const array = [];
  const increment = generateNum(min, max);
  let current = 0;
  for (let i = 0; i < length; i += 1) {
    current = firstNum + increment * i;
    array.push(current);
  }
  max = 10;
  const emptyPosition = generateNum(min, max);
  array[emptyPosition - 1] = '..';
  const correctAnswer = String(firstNum + increment * (emptyPosition - 1));
  const task = array.join(' ');
  return cons(task, correctAnswer);
};

export default () => game(rule, getConditions);
