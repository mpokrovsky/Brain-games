import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const rule = 'Answer "yes" if number even otherwise answer "no".';

const min = 0;

const max = 100;

const attempts = 3;

const isEven = num => num % 2 === 0;

export const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const userName = getUserName();
  let counter = 0;
  while (counter < attempts) {
    const randomNum = getRandomNum(min, max);
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== 'yes' && answer !== 'no') {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (answer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
