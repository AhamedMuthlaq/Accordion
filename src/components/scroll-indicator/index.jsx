import { useState, useEffect } from "react";
import "./index.css";

const ScrollIndicator = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [scrollPercent, setScrollPercent] = useState(0);

  async function fetchProducts(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setProducts(data.products);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
      setError(e.message);
    }
  }

  useEffect(() => {
    if (url !== "") fetchProducts(url);
  }, [url]);

  function handleScroll() {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercent((scrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) return <div>Loading data,please wait...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="scroll-container">
      <div className="top-container">
        <h1>Custom scroll indicator</h1>
        <div className="scroll-tracker-container">
          <div
            className="scroll-progress-bar"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>
      <div className="bottom-container">
        {products && products.length
          ? products.map((product) => <p key={product.id}>{product.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
