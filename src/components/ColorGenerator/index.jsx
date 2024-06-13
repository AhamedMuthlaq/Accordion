import { useState, useEffect } from "react";
import "./index.css";
const App = () => {
  const [color, setColor] = useState(null);
  const [type, setType] = useState(null);

  function generateIndex(length) {
    return Math.floor(Math.random() * (length - 1));
  }
  // const handleClick = () => {
  //   if (type === "hex") {
  //     const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  //     let hexColor = "#";
  //     for (let i = 0; i < 6; i++) {
  //       hexColor += hex[generateIndex(hex.length)];
  //     }
  //     setColor(hexColor);
  //   } else {
  //     const r = generateIndex(256);
  //     const g = generateIndex(256);
  //     const b = generateIndex(256);
  //     setColor(`rgb(${r},${g},${b})`);
  //   }
  // };
  function generateHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[generateIndex(hex.length)];
    }
    setColor(hexColor);
  }

  function generateRgb() {
    const r = generateIndex(256);
    const g = generateIndex(256);
    const b = generateIndex(256);
    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (type === "rgb") {
      generateRgb();
    } else {
      if (type === "hex") {
        generateHex();
      } else {
        return;
      }
    }
  }, [type]);

  return (
    <div className="wrapper" style={{ background: color }}>
      <div className="buttons">
        <button
          onClick={
            type === "hex"
              ? generateHex
              : type === null
              ? function () {
                  return;
                }
              : generateRgb
          }
        >
          Generate Random Color
        </button>
        <button onClick={() => setType("rgb")}>Rgb Color</button>
        <button onClick={() => setType("hex")}>Hex Color</button>
      </div>
      <div className="title">
        <h1>
          {type === "hex" ? "Hex Color" : type === null ? "" : "RGB Color"}
        </h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
};
export default App;
