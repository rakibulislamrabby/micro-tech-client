import React from 'react';

const FeatureRow = ({ data }) => {
    return (
        <div class="card  bg-base-100 shadow-xl p-4 px-16">
            <figure><img className='' src={data.img} alt="img" /></figure>
            <div>
                <h2 class="text-center font-bold  pt-2">{data.name}</h2>

            </div>
        </div>
    );
};

export default FeatureRow;