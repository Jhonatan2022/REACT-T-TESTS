import { WINNER_COMBOS } from "../Constants";

function checkWinner(boardValue) {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;

    if (
      boardValue[a] && // check X or O
      boardValue[a] === boardValue[b] && // check similar value
      boardValue[a] === boardValue[c]
    ) {
      // setWinner(board[a]);
      return boardValue[a]; // return the winner
    }
  }
  return null; // no winner
}

const checkEndGame = (newBoard) => {
  return newBoard.every((item) => item !== null);
};

export { checkWinner, checkEndGame };
