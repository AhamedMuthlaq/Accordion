import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./index.css";

const StarRating = ({ noOfStars = 5 }) => {
  const [clicked, setClicked] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(position) {
    setClicked(position);
  }
  function handleMouseEnter(position) {
    setHover(position);
  }
  function handleMouseLeave() {
    if (clicked) setHover(clicked);
    return;
  }

  return (
    <div
      className="star-container"
      style={{
        textAlign: "center",
        height: "100vh",
      }}
    >
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || clicked) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
