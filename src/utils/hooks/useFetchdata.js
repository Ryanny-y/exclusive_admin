import { useState, useEffect } from 'react';

const useFetchData = (url, retch = '') => {
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = (null);

  useEffect(() => {
    const controller = new AbortController();
    const {signal} = controller;

    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      isMounted = true
      
      try {
        const response = await fetch('http://localhost:3500/products', {
          method: "GET",
        });


      } catch (error) {
        
      } finally {
        isMounted = false;
      }

    }

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    }
  }, [data, loading, error]);

  return { data, loading, error };
}

export default useFetchData;