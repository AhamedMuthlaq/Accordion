import QRCode from "react-qr-code";
import "./index.css";
import { useState } from "react";

const QrCode = () => {
  const [input, setInput] = useState("");
  const [qrValue, setQrValue] = useState("");

  function generateQr() {
    setQrValue(input);
    setInput("");
  }

  return (
    <div className="qr-container">
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter your value here.."
          name="qr-text"
        />
        <button onClick={generateQr}>Generate</button>
      </div>
      <div className="qr-code">
        <QRCode bgColor="#fff" value={qrValue} size={400} />
      </div>
    </div>
  );
};
export default QrCode;
