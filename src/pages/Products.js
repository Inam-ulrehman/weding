import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

const Products = () => {
  console.log(data)
  return (
    <>
      <h1>Products</h1>
      <div>
        {data.products.map((item) => {
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
