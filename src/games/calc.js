import { game, generateNum } from '..';
import { cons } from 'hexlet-pairs';

const rule = 'What is the result of the expression?';

const getSign = () => {
  const signs = '+-*';
  return signs.charAt(Math.floor(Math.random() * signs.length));
};

const makeExpression = () => {
  const signNumber = getSign();
  const arg1 = generateNum();
  const arg2 = generateNum();
  switch (signNumber) {
    case '+': {
      const correctAnswer = arg1 + arg2;
      const task = `${arg1} + ${arg2}`;
      return cons(task, correctAnswer);
    }
    case '-': {
      const correctAnswer = arg1 - arg2;
      const task = `${arg1} - ${arg2}`;
      return cons(task, correctAnswer);
    }
    default: {
      const correctAnswer = arg1 * arg2;
      const task = `${arg1} * ${arg2}`;
      return cons(task, correctAnswer);
    }
  }
};

const brainCalc = () => game(rule, makeExpression());

export default brainCalc;
