import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../data'

const SingleProduct = () => {
  const productId = useParams()
  const { productsId: id } = productId

  const singleProduct = data.find((item) => {
    return item.id === id
  })

  const { image, name } = singleProduct

  return (
    <div>
      <div>
        <img
          style={{ height: '250px', display: 'block', margin: '0px auto' }}
          src={image}
          alt=''
        />
      </div>
      <h3>{name}</h3>
      <Link className='btn' to={'/products'}>
        Back to family
      </Link>
    </div>
  )
}

export default SingleProduct
