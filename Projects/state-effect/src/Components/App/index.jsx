import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "../Square";
import { TURNS } from "../../Constants";
import { checkWinner, checkEndGame } from "../../Logic";
import { WinnerModal } from "../WinnerModal";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
    // if (boardFromStorage) return JSON.parse(boardFromStorage);
    // return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ? turnFromStorage : TURNS.X;
  });
  const [winner, setWinner] = useState(null); // null, x, o

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    // clear game state
    localStorage.removeItem("board");
    localStorage.removeItem("turn");
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return; // not update the position
    const newBoard = [...board]; // copy the board
    newBoard[index] = turn; // update the board
    setBoard(newBoard);

    const newTrun = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTrun);

    // save game state
    localStorage.setItem("board", JSON.stringify(newBoard));
    localStorage.setItem("turn", newTrun);

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // tie
    }
  };

  return (
    <>
      <main className="board">
        <h1>tic tac toe</h1>
        <button onClick={resetGame}>Reset Game</button>
        <section className="game">
          {board.map((square, index) => (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          ))}
        </section>
        <section className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>
        <WinnerModal winner={winner} resetGame={resetGame} />
      </main>
    </>
  );
}

export { App };
