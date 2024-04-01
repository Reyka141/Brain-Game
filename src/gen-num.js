const getNumber = (minNum = 1, maxNum = 100) => {
  const numForGame = Math.floor(Math.random() * maxNum) + minNum;
  return numForGame;
};

export default getNumber;
