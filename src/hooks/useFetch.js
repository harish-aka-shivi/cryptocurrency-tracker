import React from 'react';

const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    fetchData();
  }, []);
  return { response, error, loading };
};


export default useFetch;
