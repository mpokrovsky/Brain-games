import game from '..';
import generateNum from '../utils';
import { cons } from 'hexlet-pairs';

const rule = 'What number is missing in this progression?';

const length = 10;

const max = 20;
const min = 1;

const generatePosition = () => Math.floor(Math.random() * length + 1);

const getConditions = () => {
  const firstNum = generateNum(min, max);
  const array = [];
  const increment = generateNum(min, max);
  let current = 0;
  for (let i = 0; i < length; i += 1) {
    current = firstNum + increment * i;
    array.push(current);
  }
  const index = generatePosition();
  const correctAnswer = String(firstNum + increment * (index - 1));
  const task = `${array.slice(0, index - 1)} .. ${array.slice(index)}`;
  return cons(task, correctAnswer);
};

export default () => game(rule, getConditions);
