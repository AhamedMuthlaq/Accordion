import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./index.css";

const ImageSlider = ({ url, page = "1", limit = "4" }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchItems = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setLoading(false);
        setImages(data);
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  useEffect(() => {
    if (url !== "") fetchItems(url);
  }, [url]);

  const handleRight = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  const handleLeft = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  if (loading) {
    return <div>Loading data,please wait...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="slider-container">
      <BsArrowLeftCircleFill
        onClick={handleLeft}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((item, index) => (
            <img
              alt={item.download_url}
              key={item.id}
              className={
                currentSlide === index ? "current-image" : "current-image hide"
              }
              src={item.download_url}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleRight}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                onClick={() => setCurrentSlide(index)}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
