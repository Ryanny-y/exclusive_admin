import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const useFetchData = (path, refetch = '') => {
  const { userData, backend_uri } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${backend_uri}/${path}`, {
          method: 'GET',
          headers: {
            'Content-Type': "application/json; charset=utf-8",
            'Authorization': `Bearer ${userData.accessToken}`
          },
          credentials: 'include',
          signal,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Fetch error');
        }

        const result = await response.json();

        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          setData([]);
          setError(error.message);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [backend_uri, refetch]);

  return { data, loading, error };
};

export default useFetchData;
