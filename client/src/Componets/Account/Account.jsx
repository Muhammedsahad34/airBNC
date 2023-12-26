import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Account.css';
import { UserContext } from '../../Contexts/UserContext';
import axios from 'axios';
import { baseUrl } from '../../URL';
import Places from '../Places/Places';

function Account() {
    const { userDetails, setUserDetails } = useContext(UserContext);


    let { subpage } = useParams();
    const navigate = useNavigate();
    if (subpage === undefined) {
        subpage = 'profile'
    }

    function linkClasses(type = null) {
        let classes = 'text-decoration-none text-dark p-2 ms-2'
        if (type === subpage) {
            classes += ' border border-secondary rounded-5 link text-white fw-bold'
        }else{
            classes += ' bg-secondary rounded-5'
        }
        return classes

    }
    const handleLogout = (e) => {
        e.preventDefault();
        if (window.confirm('Do you Want to logout')) {
            axios.get(`${baseUrl}/logout`, { withCredentials: true }).then((res) => {
                if (res.data) {
                    setUserDetails(null);
                    alert('Logged out');
                    navigate('/');
                }
            }).catch(err => alert(err))
        }

    }

    return (
        <div>
            <nav className='w-100 d-flex mt-4 justify-content-center'>
                <Link to={'/account/profile'} className={linkClasses('profile')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill pb-1" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                    My Profile
                </Link>
                <Link to={'/account/booking'} className={linkClasses('booking')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul pb-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg>
                    My Bookings
                </Link>
                <Link to={'/account/places'} className={linkClasses('places')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill pb-1" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                    </svg>
                    My Accommodations
                </Link>

            </nav>
            {
                subpage === 'profile' ? <div className='text-center fw-bold mt-4'>
                    {userDetails ? `Logged in as ${userDetails.name} (${userDetails.email})` : null}
                    <br />
                    <button className='w-50 border rounded-5 mt-4 text-white fw-bold' onClick={handleLogout}>Logout</button>
                </div> : ''
            }
            {
                subpage === 'places' ? <>
                    <Places />
                </> : null
            }
        </div>
    )
}

export default Account