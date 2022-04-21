import React from 'react'
import image from '../images/wedding.jpg'
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrapper>
      <div className='heading'>
        <p>
          Sania Angra <span>~Lagan~</span> Inam Ul Rehman
        </p>
      </div>

      <div className='img section'>
        <img src={image} alt='' />
      </div>
      <div className='footer'>
        <div className='timing'>
          <h4>Time</h4>
          <p>Some one update me with timing</p>
        </div>
        <div className='address'>
          <h4>Address</h4>
          <p>Some one update me with Address</p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background-color: var(--backgroundColor);
  .img {
    img {
      max-width: 400px;
      margin: 0 auto;
      display: block;
      border-radius: var(--radius);
    }
  }
  .heading {
    text-align: center;
    background-color: var(--primary-700);
    border-radius: var(--borderRadius);
    padding: 1px;
    p {
      color: var(--white);
      border-radius: var(--borderRadius);

      span {
        color: pink;
      }
    }
  }

  .footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: var(--primary-700);
    border-radius: var(--borderRadius);
  }
  .timing {
    text-align: center;
    color: var(--white);
  }
  .address {
    text-align: center;
    color: var(--white);
  }
  /* .title-line {
    height: 0.2rem;
    background-color: var(--primary-500);
    width: 4rem;
    margin: 0 auto;
    margin-top: 1rem;
  } */
`

export default Home
