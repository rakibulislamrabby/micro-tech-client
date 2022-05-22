import React from 'react';
import bg from "../../assets/images/bg/bg3.png"
const BusinessSummary = () => {
    return (
        <div className='mb-10'>
            <h2 className='text-4xl text-primary text-center font-bold'>Millions Business Trust Us</h2>
            {/* <div className="divider w-1/3 justify-center"></div> */}

            <div style={{
                background: `url(${bg})`,
                backgroundSize: "cover"

            }}>
                <div class=" flex justify-around items-center px-16">
                    <div className='py-24 text-center'>
                        <p class="  text-warning text-3xl font-bold">72+</p>
                        <p class="  text-white text-3xl font-bold">Countries</p>

                    </div>
                    <div className='py-24 text-center'>
                        <p class="  text-warning text-3xl font-bold">565+</p>
                        <p class="  text-white text-3xl font-bold">Order's Complete</p>
                    </div>
                    <div className='py-24 text-center'>
                        <p class="  text-warning text-3xl font-bold">155+</p>
                        <p class="  text-white text-3xl font-bold">Happy Client's</p>
                    </div>
                    <div className='py-24 text-center'>
                        <p class="  text-warning text-3xl font-bold">500+</p>
                        <p class="  text-white text-3xl font-bold">Feedbacks</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default BusinessSummary;