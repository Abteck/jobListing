import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data now...");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setPending(false);
        })
        .catch((err) => {
          setPending(err.message);
          setIsLoading(false);
        });
    }, 10);
  }, [url]);

  return { data, isLoading, pending };
}
