import { generateNum, game } from '..';
import { cons } from 'hexlet-pairs';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const max = 100;

export const getConditions = () => {
  const task = generateNum(max);
  const correctAnswer = isEven(task) ? 'yes' : 'no';
  return cons(task, correctAnswer);
};

const brainEven = () => game(rule, getConditions);
export default brainEven;
