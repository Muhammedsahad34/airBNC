import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../URL';
import { UserContext } from '../../Contexts/UserContext';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {userDetails,setUserDetails} = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if(userDetails){
      navigate('/')
    }

  })
  const handleLogin = (e) =>{
    e.preventDefault();
    axios.post(`${baseUrl}/login`,{email,password},{withCredentials:true}).then((res)=>{
      if(res.data === false){
        alert('Email or Password is Incorrect');
      }else{
        setUserDetails(res.data);
        alert('Loggin Success');
        navigate('/');
        
      }
      
    }).catch(err=>alert('Login Failed',err));

  }
  return (
    <div className='m-4 w-50 mx-auto mt-5'>
        <h1 className='text-center'>Login</h1>
        <input type="email" 
        placeholder='your@gmail.com' 
        className='mt-3 custom ps-3' 
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}/>

        <br />
        <input type="password" 
        placeholder='Password' 
        className='mt-3 custom ps-3' 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <button className='rounded-5 mt-3 text-white fw-bold' onClick={handleLogin}>Login</button>
        <div className='text-center text-secondary mt-3'>
            Don't have an account yet? <Link to={'/register'}>Register now</Link>
        </div>
    </div>
  )
}

export default Login