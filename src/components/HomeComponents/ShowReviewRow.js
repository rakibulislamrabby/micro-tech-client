import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ShowReviewRow = ({ review }) => {
    const [user] = useAuthState(auth);
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
            <div className="card-body">

                <div className='flex items-center'>
                    <div className="avatar pt-3">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5 ring-offset-2">
                            {
                                user?.photoURL ? <img src={user?.photoURL} alt="img" /> : <img src="https://api.lorem.space/image/face?hash=92048" alt='img' />
                            }
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.description}</p>
                        <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShowReviewRow;