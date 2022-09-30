import { useState, useEffect } from "react";

export const useFetch = (url: URL) => {
  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err: Error | any) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else if (err instanceof Error) {
          setIsPending(false);
          setError("Could not fetch the data");
          console.log(err.message);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []); // Used to have url inside the dependency

  return { data, isPending, error };
};
