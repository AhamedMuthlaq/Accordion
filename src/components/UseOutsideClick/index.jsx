import { useRef, useState } from "react";
import useClick from "./hook";

const UseOutsideClick = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();

  useClick(ref, () => setShowContent(false));

  return (
    <div>
      {/* {!showContent && (
        <button onClick={() => setShowContent(true)}>open</button>
      )} */}
      {showContent ? (
        <div ref={ref}>
          <p>Content</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>open</button>
      )}
    </div>
  );
};

export default UseOutsideClick;
