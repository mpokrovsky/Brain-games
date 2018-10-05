import { generateNum, game } from '..';
import { cons, car, cdr } from 'hexlet-pairs';

const rule = 'What number is missing in this progression?';

const amount = 10;

const max = 20;

const generatePosition = () => Math.floor(Math.random() * amount);

const generateProgression = () => {
  const firstNum = generateNum(max);
  const array = [firstNum];
  const increment = generateNum(max);
  let current = firstNum;
  for (let i = 0; i < amount - 1; i += 1) {
    current += increment;
    array.push(current);
  }
  const index = generatePosition();
  const res = `${array.slice(0, index - 1)} .. ${array.slice(index)}`;
  const correctAnswer = array[index - 1];
  return cons(res, correctAnswer);
};

export const getConditions = () => {
  const progression = generateProgression();
  const task = car(progression);
  const correctAnswer = String(cdr(progression));
  return cons(task, correctAnswer);
};

const brainGcd = () => game(rule, getConditions);

export default brainGcd;
