import React from 'react';
import bg from "../../assets/images/bg/bg3.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faFlagUsa, faPeopleRobbery, faMessage } from '@fortawesome/free-solid-svg-icons'
const BusinessSummary = () => {
    return (
        <div className='mb-10'>
            <h2 className='text-4xl text-primary text-center font-bold px-4'>Millions Business Trust Us</h2>
            {/* <div className="divider w-1/3 justify-center"></div> */}

            <div style={{
                background: `url(${bg})`,
                backgroundSize: "cover"

            }}>
                <div class=" grid grid-cols-1 lg:grid-cols-4 px-16">
                    <div className='lg:py-24 pt-28 text-center'>
                        <FontAwesomeIcon className='text-white text-4xl pb-2 ' icon={faFlagUsa}></FontAwesomeIcon>
                        <p class="  text-warning text-3xl font-bold">72+</p>
                        <p class="  text-white text-3xl font-bold">Countries</p>

                    </div>
                    <div className='lg:py-24 pt-14 text-center'>
                        <FontAwesomeIcon className='text-white text-4xl pb-2 ' icon={faComputer}></FontAwesomeIcon>
                        <p class="  text-warning text-3xl font-bold">565+</p>
                        <p class="  text-white text-3xl font-bold">Order's Complete</p>
                    </div>
                    <div className='lg:py-24 pt-14 text-center'>
                        <FontAwesomeIcon className='text-white text-4xl pb-2 ' icon={faPeopleRobbery}></FontAwesomeIcon>
                        <p class="  text-warning text-3xl font-bold">155+</p>
                        <p class="  text-white text-3xl font-bold">Happy Client's</p>
                    </div>
                    <div className='lg:py-24 pt-14 pb-28 text-center'>
                        <FontAwesomeIcon className='text-white text-4xl pb-2 ' icon={faMessage}></FontAwesomeIcon>
                        <p class="  text-warning text-3xl font-bold">500+</p>
                        <p class="  text-white text-3xl font-bold">Feedbacks</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default BusinessSummary;