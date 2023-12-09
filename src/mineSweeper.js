const emptySquare = {
  hasBomb: false,
  isCleared: false,
};

function createBoard(dimentions) {
  const columns = Array.from({ length: dimentions }, () => createSquare());
  return Array.from({ length: dimentions }, () => [...columns]);
}

function createSquare({ hasBomb, isCleared } = emptySquare) {
  return {
    bomb: hasBomb,
    visible: isCleared,
    numberOfNeighborBombs: 0,
  };
}

function addBombsToBoard(bombs, boardDimentions) {
  if (bombs.length >= boardDimentions * boardDimentions) {
    throw new Error('Invalid quantity of bombs');
  }
  const board = createBoard(boardDimentions);
  bombs.forEach((bomb) => {
    const [row, column] = bomb;
    board[row][column] = createSquare({ hasBomb: true, isCleared: false });
  });
  return board;
}

function clearBoardSquare(board, squareToClear) {
  const { row, column } = squareToClear;
  board[row][column] = createSquare({ hasBomb: false, isCleared: true });
  return board;
}

module.exports = {
  createBoard,
  createSquare,
  addBombsToBoard,
  clearBoardSquare,
};
