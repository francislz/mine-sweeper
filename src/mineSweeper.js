const emptySquare = {
  hasBomb: false,
  isCleared: false,
};

const neighborSquaresIndexes = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const defaultGameInfo = {
  finished: false,
  won: false,
  message: '',
};

const playerLostInfo = {
  finished: true,
  won: false,
  message: 'BOOM! - Game Over.',
};

const playerWonInfo = {
  finished: true,
  won: true,
  message: 'The land is cleared! GOOD JOOB!',
};

function createBoard(dimentions) {
  const columns = Array.from({ length: dimentions }, () => createSquare());
  return Array.from({ length: dimentions }, () => [...columns]);
}

function createSquare({ hasBomb, isCleared, numberOfNeighborBombs, isFlagged } = emptySquare) {
  return {
    bomb: hasBomb,
    visible: isCleared || false,
    numberOfNeighborBombs: numberOfNeighborBombs || 0,
    flagged: isFlagged || false,
  };
}

function createBombSquare() {
  return createSquare({
    hasBomb: true,
  });
}

function addBombsToBoard(bombs, boardDimentions) {
  if (bombs.length >= boardDimentions * boardDimentions) {
    throw new Error('Invalid quantity of bombs');
  }
  const board = createBoard(boardDimentions);
  bombs.forEach((bomb) => {
    const [row, column] = bomb;
    board[row][column] = createBombSquare();
  });
  return board;
}

function clearBoardSquare(board, squareToClear) {
  const { row, column } = squareToClear;
  board[row][column] = createSquare({
    hasBomb: board[row][column].bomb,
    isCleared: true,
    numberOfNeighborBombs: board[row][column].numberOfNeighborBombs,
  });
  return board;
}

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
  const sumOfNeighborBombs = neighborSquaresIndexes.reduce((sum, positions) => {
    const [nRow, nColumn] = positions;
    return calculateSumOfNeighborBombs(board, [row + nRow, column + nColumn], sum);
  }, 0);
  return sumOfNeighborBombs;
}

function getValidPosition(board, { row, column }, squareArray, positions) {
  const [nRow, nColumn] = positions;
  const neighborSquarePositions = [row + nRow, column + nColumn];
  if (isValidPosition(board, neighborSquarePositions)) {
    return [
      ...squareArray,
      {
        row: neighborSquarePositions[0],
        column: neighborSquarePositions[1],
      },
    ];
  }
  return squareArray;
}

function getNeighborSquaresToClear(board, squareToClear) {
  return neighborSquaresIndexes.reduce((squareArray, positions) => getValidPosition(board, squareToClear, squareArray, positions), []);
}

function isValidSquareToClear(board, { row, column }) {
  return !board[row][column].visible && board[row][column].numberOfNeighborBombs === 0;
}

function computeEmptySquaresToClear(board, squareToClear) {
  const { row, column } = squareToClear;
  board[row][column].numberOfNeighborBombs = calculateNumberOfNeighborBombs(board, squareToClear);
  if (isValidSquareToClear(board, squareToClear)) {
    return getNeighborSquaresToClear(board, squareToClear);
  }
  return [];
}

function recursivelyClearEmptySquares(board, squareToClear) {
  const squaresToBeCleared = [squareToClear];
  while (squaresToBeCleared.length !== 0) {
    const { row, column } = squaresToBeCleared.pop();
    const newSquaresToClear = computeEmptySquaresToClear(board, { row, column });
    clearBoardSquare(board, { row, column });
    squaresToBeCleared.unshift(...newSquaresToClear);
  }
  return board;
}

function isSquareVisibleOrBomb(square) {
  return square.visible || square.bomb;
}

function hasTheGameFinished(board) {
  return board.every((row) => row.every(isSquareVisibleOrBomb));
}

function getLossOrDefaultConditions(board, squareToClear) {
  const { row, column } = squareToClear;
  if (board[row][column].bomb) {
    return playerLostInfo;
  }
  return defaultGameInfo;
}

function checkWinningConditions(board, squareToClear) {
  if (hasTheGameFinished(board)) {
    return playerWonInfo;
  }
  return getLossOrDefaultConditions(board, squareToClear);
}

function createFlaggedSquare(square) {
  return createSquare({
    hasBomb: square.bomb,
    isCleared: square.visible,
    numberOfNeighborBombs: square.numberOfNeighborBombs,
    isFlagged: true,
  });
}

function flagSquareAsBomb(board, squareToFlag) {
  const { row, column } = squareToFlag;
  board[row][column] = createFlaggedSquare(board[row][column]);
  return board;
}

function computePossibleMovesBasedOnBoardDimentions(indexes) {
  return (validMoves, rowIndex) => [...validMoves, ...indexes.map((columnIndex) => [rowIndex, columnIndex])];
}

function generateSetOfPossibleMoves(boardDimentions) {
  const boardIndexes = Array.from({ length: boardDimentions }, (_, i) => i);
  return boardIndexes.reduce(computePossibleMovesBasedOnBoardDimentions(boardIndexes), []);
}

function generateNextMove(board) {
  const possibilities = generateSetOfPossibleMoves(board.length);
  const index = Math.floor(Math.random(board.length));
  return possibilities[index];
}

function printBoard() {}

module.exports = {
  generateNextMove,
  createBoard,
  createBombSquare,
  createSquare,
  createFlaggedSquare,
  addBombsToBoard,
  clearBoardSquare,
  calculateNumberOfNeighborBombs,
  computeEmptySquaresToClear,
  recursivelyClearEmptySquares,
  hasTheGameFinished,
  checkWinningConditions,
  flagSquareAsBomb,
  printBoard,
};
