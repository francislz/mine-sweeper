const { createBoard, createSquare, addBombsToBoard } = require('./mineSweeper');

describe('createBoard', () => {
  const emptySquare = createSquare();

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
    expect(createSquare({ hasBomb: true })).toEqual({
      bomb: true,
    });
  });

  it('should not contaiin a bomb when the game informs this square is not a bomb', () => {
    expect(createSquare({ hasBomb: false })).toEqual({
      bomb: false,
    });
  });
});

describe('adding bombs to the board', () => {
  it('should error when the amount of bombs is greater of equal the total of squares', () => {
    const bombs = [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
    ];
    expect(() => addBombsToBoard(bombs)).toThrow('Invalid quantity of bombs');
  });
});
