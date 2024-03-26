import readlineSync from 'readline-sync';
const sayHello = () => {
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
};

export default sayHello ;