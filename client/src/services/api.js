const BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const request = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  const token = localStorage.getItem('saaraswath_admin_token');

  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  if (options.body instanceof FormData) {
    delete headers['Content-Type'];
  }

  try {
    const res = await fetch(url, {
      ...options,
      headers,
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const errorMsg = data.message || `Request failed with status ${res.status}`;
      const error = new Error(errorMsg);
      error.status = res.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (err) {
    // If backend is down or unreachable during fetch, throw readable error
    if (err.name === 'TypeError' && err.message.includes('fetch')) {
      throw new Error('Unable to connect to academy server. Please verify server is running.');
    }
    throw err;
  }
};
