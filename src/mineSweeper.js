function createBoard(dimentions) {
  if (dimentions === 2) {
    return [
      ['', ''],
      ['', ''],
    ];
  }
  return [['']];
}

module.exports = {
  createBoard,
};
