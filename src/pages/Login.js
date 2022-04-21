import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = ({ setPerson }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email)
    if (!name || !email) {
      console.log('name is missing')
      return
    } else {
      console.log('name and email is provided')
      setPerson({ name, email })
      navigate('/dashboard')
    }
  }
  return (
    <>
      <div>
        <p>Please provide your details for personal card invitation</p>
        <form className='form' onSubmit={handleSubmit}>
          <div>
            <label className='form-label' htmlFor='name'>
              First Name
            </label>
            <input
              className='form-input'
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className='form-label' htmlFor='email'>
              Last Name
            </label>
            <input
              className='form-input'
              type='text'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
