import React from 'react'

const Dashboard = ({ person }) => {
  return (
    <div>
      <h2>dashboard</h2>
      <p>welcome ! {person.name}</p>
    </div>
  )
}

export default Dashboard
