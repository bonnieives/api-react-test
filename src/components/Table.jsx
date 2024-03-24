import React, { useState } from 'react'
import styles from './Table.module.css'

const Table = ({data}) => {
  const [sortBy, setSortBy ] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(column)
      setSortOrder('asc')
    }
  }

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredData = data.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy) {
      const valueA = typeof a[sortBy] === 'string' ? a[sortBy].toLowerCase() : a[sortBy];
      const valueB = typeof b[sortBy] === 'string' ? b[sortBy].toLowerCase() : b[sortBy];
      
      if (valueA === valueB) return 0;
      
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
      }
  
      if (valueA == null) return 1;
      if (valueB == null) return -1;
  
      const comparison = String(valueA).localeCompare(String(valueB));
      return sortOrder === 'asc' ? comparison : -comparison;
    }
    return 0;
  });

  return (
    <div>
      <input
      type='text'
      value={searchQuery}
      onChange={handleSearch}
      placeholder='Search by name...' 
      />
      <table className={styles.table}>
        <thead>
            <tr>
                <th onClick={() => handleSort('id')}>ID</th>
                <th onClick={() => handleSort('name')}>Name</th>
                <th onClick={() => handleSort('username')}>Username</th>
                <th onClick={() => handleSort('email')}>Email</th>
                <th onClick={() => handleSort('address.city')}>City</th>
                <th onClick={() => handleSort('phone')}>Phone</th>
                <th onClick={() => handleSort('company.name')}>Company Name</th>
            </tr>
        </thead>
        <tbody>
            {sortedData.map((user,index) => (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>
                    <td>{user.phone}</td>
                    <td>{user.company.name}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table