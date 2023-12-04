import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='m-4 w-50 mx-auto mt-5'>
        <h1 className='text-center'>Login</h1>
        <form action="" className=''>
        <input type="email" placeholder='your@gmail.com' className='mt-3 custom ps-3'/>
        <br />
        <input type="password" placeholder='Password' className='mt-3 custom ps-3'/>
        <br />
        <button className='rounded-5 mt-3 text-white fw-bold'>Login</button>
        </form>
        <div className='text-center text-secondary mt-3'>
            Don't have an account yet? <Link to={'/register'}>Register now</Link>
        </div>
    </div>
  )
}

export default Login