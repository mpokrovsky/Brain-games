import game from '..';
import generateNum from '../utils';
import { cons } from 'hexlet-pairs';

const rule = 'What is the result of the expression?';

const getSign = () => {
  const signs = '+-*';
  return signs.charAt(Math.floor(Math.random() * signs.length));
};

const max = 15;
const min = 1;

const makeExpression = () => {
  const signNumber = getSign();
  const arg1 = generateNum(min, max);
  const arg2 = generateNum(min, max);
  const correctAnswer = String(arg1 + arg2);
  const task = `${arg1} ${signNumber} ${arg2}`;
  return cons(task, correctAnswer);
};

export default () => game(rule, makeExpression);
