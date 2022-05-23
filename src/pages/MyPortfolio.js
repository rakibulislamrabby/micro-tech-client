import React from 'react';

const MyPortfolio = () => {
    return (
        <div className=''>
            <div className='text-center'>
                <h1 class="text-4xl font-bold text-primary">Md Rakibul Islam </h1>
                <p class="py-6">Email: rakibulislamrabby64@gmail.com</p>

            </div>
            <div className='lg:mx-28'>
                <h2 className='text-2xl font-bold text-center pb-4'>Educational Background</h2>
                <div className='overflow-auto'>
                    <table class="table w-full ">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>

                                <th>Institute Name</th>
                                <th>Passing Year</th>
                                <th>Subject</th>
                                <th>GPA/CGPA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            <tr>
                                <th>Jogswer Secondary School</th>
                                <td>2016</td>
                                <td>Science</td>
                                <td>4.72 (5)</td>
                            </tr>
                            <tr>
                                <th>Jhenaidah Polytechnic Institute</th>
                                <td>2020</td>
                                <td>Computer</td>
                                <td>3.32 (4)</td>
                            </tr>
                            {/* <!-- row 2 --> */}
                            <tr class="active">
                                <th>Green University of Bangladesh</th>
                                <td>Running</td>
                                <td>CSE</td>
                                <td>Not yet</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <div className='my-6 pl-5 lg:pl-28'>
                <h2 className='text-2xl font-bold text-center pb-4 text-secondary'>My Skills as a web developer</h2>
                {/* 
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-primary m-1">Programming Language</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Javascript</a></li>
                    </ul>
                </div>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-primary m-1">Front End Developement</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>HTML</a></li>
                        <li><a>CSS</a></li>
                        <li><a>CSS Framework- Bootstrap.</a></li>
                        <li><a>CSS Framework- Tailwind and Component Library(Daisy UI).</a></li>
                        <li><a>React JS</a></li>
                    </ul>
                </div> */}
                {/* <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-primary m-1">Front End Developement</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>HTML</a></li>
                        <li><a>CSS</a></li>
                        <li><a>CSS Framework- Bootstrap.</a></li>
                        <li><a>CSS Framework- Tailwind and Component Library(Daisy UI).</a></li>
                        <li><a>React JS</a></li>
                    </ul>
                </div> */}


                <div>
                    <h3 className='text-2xl text-accent'>Programming Language</h3>
                    <ul>
                        <li>1. Javascript</li>

                    </ul>
                    <h3 className='text-2xl text-accent'>Front End Developement</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>CSS Framework- Bootstrap. </li>
                        <li>CSS Framework- Tailwind and Component Library(Daisy UI). </li>
                        <li>React JS </li>
                    </ul>
                    <h3 className='text-2xl text-accent'>Back End Development</h3>
                    <ul>
                        <li>Node JS</li>
                        <li>Express JS</li>
                    </ul>
                    <h3 className='text-2xl text-accent'>DataBase</h3>
                    <ul>
                        <li>Node JS</li>
                        <li>Express JS</li>
                    </ul>
                    <h3 className='text-2xl text-accent'>Authentication</h3>
                    <ul>
                        <li>Firebase</li>
                    </ul>
                </div>
            </div>

            <div>
                <h2 className='text-2xl font-bold text-center pb-4 text-secondary'>My Projects</h2>
                <h3 className='text-xl'>Project Link:</h3>
                <h3 className='text-xl'>Project Link:</h3>
                <h3 className='text-xl'>Project Link:</h3>

            </div>

        </div>
    );
};

export default MyPortfolio;