import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cleanUp = new AbortController();
    fetch(url, { signal: cleanUp.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Sorry, we could not get the data from that resource");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        setError(null);
        setData(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setLoading(false);
          setError(err.message);
        }
      });

    return () => cleanUp.abort();
  }, [url]);

  return { data, loading, error};
};

export default useFetch;
