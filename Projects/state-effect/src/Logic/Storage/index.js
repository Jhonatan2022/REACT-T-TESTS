const saveGame = ({ board, turn }) => {
  localStorage.setItem("board", JSON.stringify(board));
  localStorage.setItem("turn", turn);
};

const resetGameStorage = () => {
  localStorage.removeItem("board");
  localStorage.removeItem("turn");
};

export { saveGame, resetGameStorage };
