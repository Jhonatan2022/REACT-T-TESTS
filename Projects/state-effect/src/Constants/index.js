
const TURNS = {
    X: "❌",
    O: "🏐",
  };
  
  const WINNER_COMBOS = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6],
  ]

// const GAME_CONSTANTS = {
//     TURNS,
//     WINNER_COMBOS
// }

// export { GAME_CONSTANTS }

export { TURNS, WINNER_COMBOS }