import { useState, useEffect } from "react";
import "./index.css";

const TicTacToe = ({ noOfBoxes = 9 }) => {
  const [boxes, setBoxes] = useState(new Array(noOfBoxes).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  const [status, setStatus] = useState("");

  const handleClick = (index) => {
    if (getWinner(boxes)) return;
    const value = isXturn ? "X" : "O";
    const newBoxes = [...boxes];
    newBoxes[index] = newBoxes[index] === null ? value : newBoxes[index];
    setBoxes(newBoxes);
    setIsXturn(!isXturn);
  };
  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z])
        return squares[x];
    }
    return null;
  }
  useEffect(() => {
    if (!getWinner(boxes) && boxes.every((item) => item !== null)) {
      setStatus(`The game is a tie,Please restart the game.`);
    } else if (getWinner(boxes)) {
      setStatus(`Winner is : ${getWinner(boxes)}`);
    } else {
      setStatus(`Next player is : ${isXturn ? "X" : "O"}`);
    }
  }, [boxes, isXturn]);

  function restart() {
    setBoxes(Array(noOfBoxes).fill(null));
    setIsXturn(true);
  }
  return (
    <div className="tictac-wrapper">
      <div className="tictac-container">
        {[...boxes].map((box, index) => (
          <div onClick={() => handleClick(index)} key={index} className="box">
            <h1>{box}</h1>
          </div>
        ))}
      </div>
      <p className="status">{status && status}</p>
      <button className="restart" onClick={restart}>
        restart
      </button>
    </div>
  );
};

export default TicTacToe;
