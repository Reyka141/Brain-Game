import readlineSync from 'readline-sync';

const sayHello = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export default sayHello;
