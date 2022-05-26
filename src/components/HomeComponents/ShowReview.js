import React, { useEffect, useState } from 'react';
import ShowReviewRow from './ShowReviewRow';

const ShowReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // for ()
    return (
        <div className='py-16 lg:px-16'>
            <h2 className='text-3xl font-bold text-secondary text-center'>Customer Review</h2>
            <h3 className='text-xl  text-secondary text-center'>What Our Patients Says</h3>

            <div className='grid grid-1 lg:grid-cols-3 md:grid-cols-2 gap-5 pt-2'>
                {
                    reviews.map(review => <ShowReviewRow
                        key={review._id}
                        review={review}
                    ></ShowReviewRow>)
                }
            </div>
        </div>
    );
};

export default ShowReview;