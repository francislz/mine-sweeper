const emptySquare = {
  hasBomb: false,
};

function createBoard(dimentions) {
  const columns = Array.from({ length: dimentions }, () => createSquare());
  return Array.from({ length: dimentions }, () => [...columns]);
}

function createSquare({ hasBomb } = emptySquare) {
  return {
    bomb: hasBomb,
  };
}

module.exports = {
  createBoard,
  createSquare,
};
