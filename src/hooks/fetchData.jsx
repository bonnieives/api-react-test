import { useState } from 'react';
import { fetchData } from '../api/api';

export function useFetchData() {
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    fetchData()
      .then((d) => setData(d));
  };

  return {
    data,
    fetchInfo
  };
}