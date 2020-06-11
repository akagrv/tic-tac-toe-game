import React from "react";
import Square from "./Square";

const boardStyle = {
  width: "300px",
  height: "300px",
  margin: "30px auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  border: "5px solid darkblue",
  borderRadius: "10px",
};

const Board = ({ squares, onClick }) => (
  <div style={boardStyle}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
