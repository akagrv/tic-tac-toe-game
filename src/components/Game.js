import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helper";

const displayStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "300px",
  margin: "40px auto",
  textAlign: "center",
  fontSize: "20px",
};

const buttonStyle = {
  padding: "10px",
  margin: "10px",
  cursor: "pointer",
  color: "white",
  fontSize: "20px",
  backgroundColor: "darkblue",
  border: "none",
  outline: "none",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    let boardCopy = [...board];
    // check if we have a winner or the box is filled
    if (winner || boardCopy[i]) return;
    xIsNext ? (boardCopy[i] = "X") : (boardCopy[i] = "O");
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={displayStyle}>
        {winner ? `Winner ${winner}` : "Next Player: " + (xIsNext ? "X" : "O")}
        <button
          style={buttonStyle}
          onClick={() => setBoard(Array(9).fill(null))}
        >
          Start Game
        </button>
      </div>
    </>
  );
};

export default Game;
