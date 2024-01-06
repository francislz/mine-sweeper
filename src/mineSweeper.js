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

function calculateNumberOfNeighborBombs(board, squareToClear) {
  const { row, column } = squareToClear;
  let sumOfNeighborBombs = 1;
  if (board[row][column - 1].bomb) {
    sumOfNeighborBombs += 1;
  }
  if (board[row + 1][column].bomb) {
    sumOfNeighborBombs += 1;
  }
  if (board[row][column + 1].bomb) {
    sumOfNeighborBombs += 1;
  }
  return sumOfNeighborBombs;
}

module.exports = {
  createBoard,
  createSquare,
  addBombsToBoard,
  clearBoardSquare,
  calculateNumberOfNeighborBombs,
};
