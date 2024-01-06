const {
  createBoard,
  createSquare,
  addBombsToBoard,
  clearBoardSquare,
  calculateNumberOfNeighborBombs,
  computeEmptySquaresToClear,
  recursivelyClearEmptySquares,
  hasTheGameFinished,
  checkWinningConditions,
} = require('./mineSweeper');
const emptySquare = createSquare({ hasBomb: false, isCleared: false });
const clearedSquare = createSquare({ hasBomb: false, isCleared: true });
const oneNeighborBombSquare = createSquare({
  hasBomb: false,
  isCleared: true,
  numberOfNeighborBombs: 1,
});
const bombSquare = createSquare({ hasBomb: true, isCleared: false });

describe('createBoard', () => {
  it('should create an 1x1 board with empty squares', () => {
    expect(createBoard(1)).toEqual([[emptySquare]]);
  });

  it('should create an 2x2 board with empty squares', () => {
    expect(createBoard(2)).toEqual([
      [emptySquare, emptySquare],
      [emptySquare, emptySquare],
    ]);
  });

  it('should create an 3x3 board with empty squares', () => {
    expect(createBoard(3)).toEqual([
      [emptySquare, emptySquare, emptySquare],
      [emptySquare, emptySquare, emptySquare],
      [emptySquare, emptySquare, emptySquare],
    ]);
  });

  it('should create an 4x4 board with empty squares', () => {
    expect(createBoard(4)).toEqual([
      [emptySquare, emptySquare, emptySquare, emptySquare],
      [emptySquare, emptySquare, emptySquare, emptySquare],
      [emptySquare, emptySquare, emptySquare, emptySquare],
      [emptySquare, emptySquare, emptySquare, emptySquare],
    ]);
  });
});

describe('creating squares for the board', () => {
  it('should contain a bomb when the game informs this square is a bomb', () => {
    expect(createSquare({ hasBomb: true, isCleared: false })).toEqual(bombSquare);
  });

  it('should not contaiin a bomb when the game informs this square is not a bomb', () => {
    expect(createSquare({ hasBomb: false, isCleared: false })).toEqual(emptySquare);
  });
});

describe('adding bombs to the board', () => {
  it('should error when the amount of bombs is greater of equal the total of squares', () => {
    const bombs = [
      [0, 0],
      [1, 0],
    ];
    const boardDimentions = 1;
    expect(() => addBombsToBoard(bombs, boardDimentions)).toThrow('Invalid quantity of bombs');
  });

  it('should not error when the amount of bombs is less the total of squares', () => {
    const bombs = [
      [0, 0],
      [1, 0],
    ];
    const boardDimentions = 2;
    expect(() => addBombsToBoard(bombs, boardDimentions)).not.toThrow();
  });

  it('add the bombs provided to an empty board', () => {
    const bombs = [
      [0, 0],
      [1, 1],
      [2, 2],
    ];
    const boardDimentions = 3;
    expect(addBombsToBoard(bombs, boardDimentions)).toEqual([
      [bombSquare, emptySquare, emptySquare],
      [emptySquare, bombSquare, emptySquare],
      [emptySquare, emptySquare, bombSquare],
    ]);
  });
});

describe('clearing squares without bombs', () => {
  it('should make the square visible and not have any neighbor bombs', () => {
    const squareToClear = { row: 0, column: 1 };
    const board = addBombsToBoard([[0, 0]], 3);
    const newBoard = clearBoardSquare(board, squareToClear);
    const clearedSquare = createSquare({ isCleared: true, hasBomb: false });

    expect(newBoard).toEqual([
      [bombSquare, clearedSquare, emptySquare],
      [emptySquare, emptySquare, emptySquare],
      [emptySquare, emptySquare, emptySquare],
    ]);
  });
});

describe('calculating the number of neighbor bombs', () => {
  it('should contain 1 bomb when only the TOP square has a bomb', () => {
    const squareToClear = { row: 1, column: 1 };
    const bombs = [[0, 1]];
    const board = addBombsToBoard(bombs, 3);
    expect(calculateNumberOfNeighborBombs(board, squareToClear)).toBe(1);
  });

  it('should calculate two neighbor bombs, on: TOP and LEFT', () => {
    const squareToClear = { row: 1, column: 1 };
    const bombs = [
      [0, 1],
      [1, 0],
    ];
    const board = addBombsToBoard(bombs, 3);
    expect(calculateNumberOfNeighborBombs(board, squareToClear)).toBe(2);
  });

  it('should calculate 3 neighbor bombs, on: TOP, LEFT and BOTTOM', () => {
    const squareToClear = { row: 1, column: 1 };
    const bombs = [
      [0, 1],
      [1, 0],
      [2, 1],
    ];
    const board = addBombsToBoard(bombs, 3);
    expect(calculateNumberOfNeighborBombs(board, squareToClear)).toBe(3);
  });

  it('should calculate 4 neighbor bombs, on: TOP, LEFT, BOTTOM and RIGHT', () => {
    const squareToClear = { row: 1, column: 1 };
    const bombs = [
      [0, 1],
      [1, 0],
      [2, 1],
      [1, 2],
    ];
    const board = addBombsToBoard(bombs, 3);
    expect(calculateNumberOfNeighborBombs(board, squareToClear)).toBe(4);
  });

  it('should calculate 5 neighbor bombs, on: TOP, LEFT, BOTTOM, RIGHT and on one of the DIAGONALS', () => {
    const squareToClear = { row: 1, column: 1 };
    const bombs = [
      [0, 1],
      [1, 0],
      [2, 1],
      [1, 2],
      [2, 2],
    ];
    const board = addBombsToBoard(bombs, 3);
    expect(calculateNumberOfNeighborBombs(board, squareToClear)).toBe(5);
  });
});

describe('calculate squares to clear when no neighbor bombs were found', () => {
  it('should return all the neighbor squares when no bombs were found', () => {
    const squareToClear = { row: 2, column: 0 };
    const bombs = [[0, 2]];
    const board = addBombsToBoard(bombs, 3);
    expect(computeEmptySquaresToClear(board, squareToClear)).toEqual([
      { row: 1, column: 0 },
      { row: 1, column: 1 },
      { row: 2, column: 1 },
    ]);
  });
  it('should return no neighbor squares when bombs were found', () => {
    const squareToClear = { row: 1, column: 1 };
    const bombs = [[0, 2]];
    const board = addBombsToBoard(bombs, 3);
    expect(computeEmptySquaresToClear(board, squareToClear)).toEqual([]);
  });
});

describe('recursively clear squares until one neighbor bomb is found', () => {
  it('should return the board with the squares cleared', () => {
    const squareToClear = { row: 2, column: 0 };
    const bombs = [[0, 2]];
    const board = addBombsToBoard(bombs, 3);

    const clearedBoard = recursivelyClearEmptySquares(board, squareToClear);

    expect(clearedBoard).toEqual([
      [clearedSquare, oneNeighborBombSquare, bombSquare],
      [clearedSquare, oneNeighborBombSquare, oneNeighborBombSquare],
      [clearedSquare, clearedSquare, clearedSquare],
    ]);
  });
});

describe('checks if the game has finished due to uncleared squares', () => {
  it('should indicate that the game is not finished since there are uncleared squares', () => {
    const bombs = [[0, 2]];
    const board = addBombsToBoard(bombs, 3);

    expect(hasTheGameFinished(board)).toBe(false);
  });

  it('should indicate that the game is finished when there are no uncleared squares', () => {
    const squareToClear = { row: 2, column: 0 };
    const bombs = [[0, 2]];
    const board = addBombsToBoard(bombs, 3);

    const clearedBoard = recursivelyClearEmptySquares(board, squareToClear);

    expect(hasTheGameFinished(clearedBoard)).toBe(true);
  });
});

describe('should verify if player won the game', () => {
  it('should give the message "BOOM! - Game Over." when the player opens a bomb square', () => {
    const squareToClear = { row: 0, column: 2 };
    const bombs = [[0, 2]];
    const board = addBombsToBoard(bombs, 3);

    expect(checkWinningConditions(board, squareToClear)).toBe({
      finished: true,
      won: false,
      message: 'BOOM! - Game Over.',
    });
  });
});
