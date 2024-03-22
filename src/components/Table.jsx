import React from 'react'
import styles from './Table.module.css'

const Table = ({data}) => {
  return (
    <div className={styles.table}>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Street</th>
                <th>Suite</th>
                <th>City</th>
                <th>Zipcode</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company Name</th>
                <th>Catch Phrase</th>
                <th>BS</th>
            </tr>
        </thead>
        <tbody>
            {data.map((user,index) => (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address.street}</td>
                    <td>{user.address.suite}</td>
                    <td>{user.address.city}</td>
                    <td>{user.address.zipcode}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.company.name}</td>
                    <td>{user.company.catchPhrase}</td>
                    <td>{user.company.bs}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table