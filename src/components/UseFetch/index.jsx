import useFetch from "./hook";
import { useRef } from "react";

const Test = () => {
  const { data, pending, error } = useFetch(
    "https://dummyjson.com/products?limit=200",
    {}
  );

  const bottomRef = useRef(null);
  const secRef = useRef(null);

  function scrollBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function scrollToSection() {
    let pos = secRef.current.getBoundingClientRect().top;
    window.scrollTo({ top: pos, behavior: "smooth" });
  }

  return (
    <div>
      <button onClick={scrollBottom}>scroll to bottom</button>
      <button onClick={scrollToSection}>scroll to section</button>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Pending ! Please wait</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem, index) => (
            <p ref={index === 80 ? secRef : null} key={productItem.key}>
              {productItem.title}
            </p>
          ))
        : null}
      <button ref={bottomRef} onClick={scrollTop}>
        scroll to top
      </button>
    </div>
  );
};

export default Test;
