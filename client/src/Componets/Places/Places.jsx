import React from 'react'
import { Link, useParams } from 'react-router-dom';
import './Places.css'

function Places() {
    const { action } = useParams();
    let classes = 'form-control rounded-5'

    return (
        <div>
            {action !== 'new' && (
                <div className='text-center mt-4'>
                    <Link to={'/account/places/new'} className='link1 rounded-5 px-2 py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus pb-1" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                        Add new Places
                    </Link>
                </div>
            )}
            {
                action === 'new' && (
                    <div className='m-5'>
                        <h5>Title</h5>
                        <input type="text" placeholder='title for your place' className={classes}/>
                        <h5 className='mt-2'>Adress</h5>
                        <input type="text" placeholder='address to your place' className={classes}/>
                        <h5 className='mt-2'>Photos</h5>
                        <input type="text" placeholder='link of your photos' className={classes}/>
                    </div>
                )
            }
        </div>
    )
}

export default Places