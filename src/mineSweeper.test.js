const { createBoard } = require('./mineSweeper');

describe('createBoard', () => {
  it('should create an 1x1 board with empty squares', () => {
    expect(createBoard()).toEqual([['']]);
  });
});
