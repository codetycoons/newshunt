import React from "react";
import { NEWS_API_KEY } from "../common/common";

export const useFetch = (url, method, body = {}) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://newsapi.org/v2/${url}`, {
          method,
          headers: {
            Authorization: "Bearer " + NEWS_API_KEY,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          // body: JSON.stringify(body),
        });

        const json = await res.json();
        setResponse(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { response, error, loading };
};
