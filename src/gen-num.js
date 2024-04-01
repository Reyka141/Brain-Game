const getNumber = (minNum = 1, maxNum = 100) => {
  const generateNumForGame = Math.floor(Math.random() * maxNum) + minNum;
  return generateNumForGame;
};

export default getNumber;
