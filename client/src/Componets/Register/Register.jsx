import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../URL';
import { UserContext } from '../../Contexts/UserContext';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUserDetails} = useContext(UserContext);
  const navigate = useNavigate();

  const handleRegister = (e)=>{
    e.preventDefault();
    axios.post(`${baseUrl}/register`,{
      name,
      email,
      password
    }).then((res)=>{
      setUserDetails(res.data);
      console.log(res.data);
      alert('Registration Success');
      navigate('/');
     })
    .catch(err=>alert('Registration failed', err));
  }
  axios.defaults.withCredentials = true;

  return (
    <div className='m-4 w-50 mx-auto mt-5'>
        <h1 className='text-center'>Register</h1>
        <input type="text" 
        placeholder='Your Name' 
        className='mt-3 custom ps-3' 
        value={name} 
        onChange={e=>setName(e.target.value)}/>

        <input type="email" 
        placeholder='your@gmail.com' 
        className='mt-3 custom ps-3'
        value={email} 
        onChange={e=>setEmail(e.target.value)}/>

        <br />

        <input type="password" 
        placeholder='Password'
        className='mt-3 custom ps-3' 
        value={password} 
        onChange={e=>setPassword(e.target.value)}/>

        <br />

        <button className='rounded-5 mt-3 text-white fw-bold'onClick={handleRegister}>Register</button>
        <div className='text-center text-secondary mt-3'>
            Already have an account? <Link to={'/login'}>Login</Link>
        </div>
    </div>
  )
}

export default Register