import React, { useEffect } from 'react';
import { useFetchData } from "./hooks/fetchData"
import Table from './components/Table';
import './App.css';
import FootballInfo from './components/FootballInfo';

function App() {
  const { data, fetchInfo } = useFetchData();

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Playing with API</h1>
        <FootballInfo />
        <h3>I am using https://jsonplaceholder.typicode.com/users to test API functionalities in React</h3>
        <Table data={data} />
      </div>
    </>
  );
}

export default App;