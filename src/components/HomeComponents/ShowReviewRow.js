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
                        <div className='flex pt-2'>
                            {[...Array(Number(review.rating))].map((element) => (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5  w-5 text-yellow-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        {/* {review.map((element) => <p>{element.rating}</p>)} */}

                        {/* <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShowReviewRow;