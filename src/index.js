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

export { getNumber, printAnswer };
