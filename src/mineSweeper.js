const emptySquare = {
  hasBomb: false,
};

function createBoard(dimentions) {
  const columns = Array.from({ length: dimentions }, () => createSquare());
  return Array.from({ length: dimentions }, () => [...columns]);
}

function createSquare({ hasBomb } = emptySquare) {
  return {
    bomb: hasBomb,
  };
}

function addBombsToBoard(bombs, boardDimentions) {
  if (bombs.length >= boardDimentions * boardDimentions) {
    throw new Error('Invalid quantity of bombs');
  }
  const board = createBoard(boardDimentions);
  bombs.forEach((bomb) => {
    const [row, column] = bomb;
    board[row][column] = createSquare({ hasBomb: true });
  });
  return board;
}

function clearBoardSquare() {}

module.exports = {
  createBoard,
  createSquare,
  addBombsToBoard,
  clearBoardSquare,
};
