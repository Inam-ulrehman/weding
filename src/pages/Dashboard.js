import React from 'react'

const Dashboard = ({ person }) => {
  return (
    <div>
      <h2>Weding card </h2>
      <h4>
        welcome ! {person.name} {person.email}...
      </h4>

      <p> here i'm going to put card that will grab details and put here</p>
    </div>
  )
}

export default Dashboard
