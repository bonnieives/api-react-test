import React, { useEffect } from 'react';
import { useFetchData } from "./hooks/fetchData"
import Table from './components/Table';
import './App.css';

function App() {
  const { data, fetchInfo } = useFetchData();

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Playing with API</h1>
        <Table data={data} />
      </div>
    </>
  );
}

export default App;