const getNumber = () => {
  const generateNumForGame = Math.floor(Math.random() * 100) + 1;
  return generateNumForGame;
};

const printAnswer = (systemAnswer, answerUser) => {
  let answer = '';
  if (systemAnswer === answerUser) {
    answer = 'Correct!';
  } else {
    answer = `'${answerUser}' is wrong answer ;(. Correct answer was '${systemAnswer}'.`;
  }
  return answer;
};

const genArrOperation = () => {
  const operations = ['+', '-', '*'];
  const arr = [];
  const temp = [];
  while (arr.length < 3) {
    const randNum = Math.floor(Math.random() * 3);
    if (!temp.includes(randNum)) {
      temp.push(randNum);
      arr.push(operations[randNum]);
    }
  }
  return arr;
};
export { getNumber, printAnswer, genArrOperation };
