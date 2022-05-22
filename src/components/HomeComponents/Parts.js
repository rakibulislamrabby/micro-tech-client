import React, { useEffect, useState } from 'react';
import Part from './Part';



const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    console.log(parts);
    return (
        <div className='px-14'>
            <h2 className='text-3xl text-primary text-center font-bold mb-10'>Our Available Parts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;