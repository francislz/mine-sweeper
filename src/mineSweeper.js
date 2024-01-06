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

function createBoard(dimentions) {
  const columns = Array.from({ length: dimentions }, () => createSquare());
  return Array.from({ length: dimentions }, () => [...columns]);
}

function createSquare({ hasBomb, isCleared, numberOfNeighborBombs } = emptySquare) {
  return {
    bomb: hasBomb,
    visible: isCleared,
    numberOfNeighborBombs: numberOfNeighborBombs || 0,
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

function getNeighborSquaresToClear(board, squareToClear) {
  const { row, column } = squareToClear;
  return neighborSquaresIndexes.reduce((squareArray, positions) => {
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
  }, []);
}

function computeEmptySquaresToClear(board, squareToClear) {
  const { row, column } = squareToClear;
  board[row][column].numberOfNeighborBombs = calculateNumberOfNeighborBombs(board, squareToClear);
  if (!board[row][column].visible && board[row][column].numberOfNeighborBombs === 0) {
    return getNeighborSquaresToClear(board, squareToClear);
  }
  return [];
}

function recursivelyClearEmptySquares(board, squareToClear) {
  const squaresToBeCleared = [squareToClear];
  while (squaresToBeCleared.length !== 0) {
    const { row, column } = squaresToBeCleared.pop();
    const newSquaresToClear = computeEmptySquaresToClear(board, { row, column });
    board[row][column] = createSquare({
      hasBomb: false,
      isCleared: true,
      numberOfNeighborBombs: board[row][column].numberOfNeighborBombs,
    });
    squaresToBeCleared.unshift(...newSquaresToClear);
  }
  return board;
}

module.exports = {
  createBoard,
  createSquare,
  addBombsToBoard,
  clearBoardSquare,
  calculateNumberOfNeighborBombs,
  computeEmptySquaresToClear,
  recursivelyClearEmptySquares,
};
