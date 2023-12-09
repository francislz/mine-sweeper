const { createBoard, createSquare } = require('./mineSweeper');

describe('createBoard', () => {
  it('should create an 1x1 board with empty squares', () => {
    expect(createBoard(1)).toEqual([['']]);
  });

  it('should create an 2x2 board with empty squares', () => {
    expect(createBoard(2)).toEqual([
      ['', ''],
      ['', ''],
    ]);
  });

  it('should create an 3x3 board with empty squares', () => {
    expect(createBoard(3)).toEqual([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
  });

  it('should create an 4x4 board with empty squares', () => {
    expect(createBoard(4)).toEqual([
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
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
