function createBoard(dimentions) {
  if (dimentions === 2) {
    return [
      ['', ''],
      ['', ''],
    ];
  }

  if (dimentions === 3) {
    return [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }

  return [['']];
}

module.exports = {
  createBoard,
};
