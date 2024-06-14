import { useState, useEffect } from "react";
import "./index.css";

const LoadMore = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts([...products, ...result.products]);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length === 100) {
      setDisabled(true);
    }
  }, [products]);

  if (loading) return <div>Loading,Please wait...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="outside-container">
      <div className="products-container">
        {products && products.length
          ? products.map((product) => (
              <div key={product.id} className="product">
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button disabled={disabled} onClick={() => setCount(count + 1)}>
          Load more...
        </button>
        {disabled ? (
          <p>
            Can't Load anymore, You have reached your limit of loading 100
            products
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default LoadMore;
