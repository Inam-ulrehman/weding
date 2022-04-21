import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

const Products = () => {
  console.log(data)
  return (
    <>
      <h1>Family Members</h1>
      <div>
        {data.map((item) => {
          const { id, name } = item
          return (
            <div key={id}>
              <p>{name}</p>
              <Link to={`/products/${id}`}>More info</Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Products
