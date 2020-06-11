import React from "react";

const buttonStyle = {
  backgroundColor: "lightblue",
  border: "2px solid darkblue",
  fontSize: "32px",
  fontWeight: "bold",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }) => (
  <button style={buttonStyle} onClick={onClick}>
    <span
      style={
        value == "X"
          ? { color: "green", textShadow: "2px 2px #333" }
          : { color: "red", textShadow: "2px 2px #333" }
      }
    >
      {value}
    </span>
  </button>
);

export default Square;
