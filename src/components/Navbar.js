import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper>
      <div className='logo'></div>
      <div className='nav-links'>
        <Link className='link active' to={'/'}>
          Home
        </Link>
        <Link className='link' to={'/About'}>
          AboutUs
        </Link>
        <Link className='link' to={'/Products'}>
          Family
        </Link>
        <Link className='link' to={'/login'}>
          WedingCard
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;

  .link {
    margin-left: 1rem;
    font-size: 1.4rem;
  }
`

export default Navbar
