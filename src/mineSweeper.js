function createBoard(dimentions) {
  const columns = Array.from({ length: dimentions }, () => '');
  return Array.from({ length: dimentions }, () => [...columns]);
}

function createSquare() {
  return {};
}

module.exports = {
  createBoard,
  createSquare,
};
