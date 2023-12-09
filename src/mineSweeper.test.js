const { createBoard } = require('./mineSweeper');

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
