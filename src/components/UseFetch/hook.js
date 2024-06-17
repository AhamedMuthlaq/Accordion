import { useEffect, useState } from "react";

export default function useFetch(url, optionsObj = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(url) {
    setPending(true);
    try {
      const response = await fetch(url, { ...optionsObj });
      if (!response.ok) throw new Error(response.statusText);

      const data = await response.json();

      if (data) {
        setData(data);
        setPending(false);
      }
    } catch (e) {
      setPending(false);
      setError(e.message);
    }
  }

  useEffect(() => {
    if (url !== null) fetchData(url);
  }, [url]);

  return { data, pending, error };
}
