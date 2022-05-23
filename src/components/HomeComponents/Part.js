import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, img, description, price, availableQuantity, minimumQuantity } = part;
    const navigate = useNavigate();
    const navigatetoDisplayDetails = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div class="card  bg-base-100 shadow-xl">
            <figure><img className='w-48' src={img} alt="img" /></figure>
            <div class="card-body">
                <h2 class="card-title text-bold text-primary">{name}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
                <p>AvailableQuantity: {availableQuantity}</p>
                <p>Minimum Order: {minimumQuantity}</p>
                <div class="card-actions justify-end">
                    <button onClick={() => navigatetoDisplayDetails(_id)} class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;