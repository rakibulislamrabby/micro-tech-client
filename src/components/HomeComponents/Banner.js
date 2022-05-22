import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen lg:px-20 ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://images.pexels.com/photos/163140/technology-computer-motherboard-chips-163140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img' class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Best Menufacture Site of your <span className='text-5xl font-bold text-primary'>computers parts</span></h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;