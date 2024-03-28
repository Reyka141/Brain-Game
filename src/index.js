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

const hasNod = (firstNum, secondNum) => {
  let minNum;
  const arrOfDivider = [];
  if (firstNum < secondNum) {
    minNum = firstNum;
  } else {
    minNum = secondNum;
  }
  for (let i = 1; i <= minNum; i += 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      arrOfDivider.push(i);
    }
  }
  const maxOfDivider = arrOfDivider.pop().toString();
  return maxOfDivider;
};

export {
  getNumber, printAnswer, genArrOperation, hasNod,
};
