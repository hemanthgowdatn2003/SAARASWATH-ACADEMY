import { useState, useEffect, useCallback } from 'react';

export const useFetch = (fetchFunction, fallbackData = null) => {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      setError(err.message || 'Failed to fetch data');
      if (fallbackData) setData(fallbackData);
    } finally {
      setLoading(false);
    }
  }, [fetchFunction, fallbackData]);

  useEffect(() => {
    execute();
  }, [execute]);

  return { data, loading, error, refetch: execute };
};
