const { createBoard } = require('./mineSweeper');

describe('createBoard', () => {
  it('should return createBoard', () => {
    expect(createBoard()).toBe('empty');
  });
});
