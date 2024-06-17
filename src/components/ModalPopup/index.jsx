import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import "./index.css";

const ModalPopup = () => {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }
  return (
    <div className="popup-bg-layer">
      <Button onClick={handleClick} handleClick={handleClick} />
      {show && (
        <Modal
          className={show ? "transparent" : ""}
          handleClick={handleClick}
        />
      )}
    </div>
  );
};

export default ModalPopup;
