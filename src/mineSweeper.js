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

const neighborBombsIndexes = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function isValidIndexPosition(index, length) {
  return index >= 0 && index < length;
}

function isValidPosition(board, positions) {
  const rowLength = board.length;
  const columnLength = board[0].length;
  const [row, column] = positions;
  return isValidIndexPosition(row, rowLength) && isValidIndexPosition(column, columnLength);
}

function isValidBombPosition(board, positions) {
  const [row, column] = positions;
  return isValidPosition(board, positions) && board[row][column].bomb;
}

function calculateSumOfNeighborBombs(board, positions, sum) {
  if (isValidBombPosition(board, positions)) {
    return sum + 1;
  }
  return sum;
}

function calculateNumberOfNeighborBombs(board, squareToClear) {
  const { row, column } = squareToClear;
  const sumOfNeighborBombs = neighborBombsIndexes.reduce((sum, positions) => {
    const [nRow, nColumn] = positions;
    return calculateSumOfNeighborBombs(board, [row + nRow, column + nColumn], sum);
  }, 0);
  return sumOfNeighborBombs;
}

module.exports = {
  createBoard,
  createSquare,
  addBombsToBoard,
  clearBoardSquare,
  calculateNumberOfNeighborBombs,
};
