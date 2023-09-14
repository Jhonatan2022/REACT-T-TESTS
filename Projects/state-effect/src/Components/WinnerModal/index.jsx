import { Square } from "../Square";

function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;

  const winnerText = winner === false ? "tie" : `winner: ${winner}`;

  return (
    <>
      <section className="winner">
        <div className="text">
          <h2>{winnerText}</h2>

          <header className="win">{winner && <Square>{winner}</Square>}</header>

          <footer>
            <button onClick={resetGame}>Play Again</button>
          </footer>
        </div>
      </section>
    </>
  );
}

export { WinnerModal };
