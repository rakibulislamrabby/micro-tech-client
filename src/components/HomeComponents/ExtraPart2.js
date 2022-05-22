import React from 'react';
import bg from "../../assets/images/bg/bg3.png"
const ExtraPart2 = () => {
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: "cover"

        }}
            class=" ">
            <div class=" flex justify-between items-center px-16">
                <div className='py-24'>
                    <p class="  text-white text-3xl font-bold"><span className='text-yellow-400'>We have</span> Recommendation For you</p>
                    <p className='text-white'>Take 30% When You Spend $150 Or More With Code macrotix</p>
                </div>
                <div className='pt-6'>
                    <input type="text" placeholder="Your Email address" class="input  input-bordered w-80" />
                    <button class="btn btn-warning mx-6">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default ExtraPart2;