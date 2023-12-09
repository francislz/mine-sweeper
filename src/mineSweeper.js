function createBoard(dimentions) {
  const columns = Array.from({ length: dimentions }, () => '');
  return Array.from({ length: dimentions }, () => [...columns]);
}

function createSquare({ hasBomb }) {
  return {
    bomb: hasBomb,
  };
}

module.exports = {
  createBoard,
  createSquare,
};
