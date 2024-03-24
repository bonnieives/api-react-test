import { useState } from 'react';
import { fetchFootballData } from '../api/api';

export function useFetchFootballData() {
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    fetchFootballData()
      .then((d) => setData(d))
      .catch((error) => console.error('Error fetching football data:', error));
  };

  return {
    data,
    fetchInfo
  };
}