import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import UserDetails, { UserContext } from '../../Contexts/UserContext';
function Header() {
    const {userDetails} = useContext(UserContext);
    useEffect(()=>{
        console.log(userDetails);
    },[])
    return (
        <div>
            <header>
                <div className='d-flex align-items-center ms-2 p-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="logo">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    <span className='ps-1 fw-bold'>AirBNC</span>
                    <div className='d-flex mx-auto align-items-center border border-secondary rounded-5 p-2 shadow-lg'>
                        <div className='ps-1 pe-1 border-end border-secondary'>Anywhere</div>
                        <div className='ps-1 pe-1 border-end border-secondary'> Any week</div>
                        <div className='ps-1 pe-1 border-end border-secondary'>Add guest</div>
                        <div className='ps-1 pe-1 text-white '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="logo2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                    </div>
                    <Link to={'/login'} className='d-flex me-4 align-items-center border border-secondary rounded-5 p-2' style={{cursor:'pointer'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="logo3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <div className='bg-secondary text-white rounded-5 ms-2 overflow-hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="logo4">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                            </svg>


                        </div>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Header