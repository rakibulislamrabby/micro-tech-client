import React from 'react';
import img1 from "../../assets/images/featureIcon/processor.png"
import img2 from "../../assets/images/featureIcon/ssd.png"
import img3 from "../../assets/images/featureIcon/gfsCard.png"
import img4 from "../../assets/images/featureIcon/keyboard.png"
import img5 from "../../assets/images/featureIcon/std.png"
import img6 from "../../assets/images/featureIcon/webcam.png"
import img7 from "../../assets/images/featureIcon/mouse.png"
import img8 from "../../assets/images/featureIcon/cable.png"
import FeatureRow from './FeatureRow';

const FeatureCategory = () => {
    const featureCategory = [
        { id: 1, name: "Processor", img: img1 },
        { id: 2, name: "SSD", img: img2 },
        { id: 3, name: "Graphics Card", img: img3 },
        { id: 4, name: "Keyboard", img: img4 },
        { id: 5, name: "Studio Equipment", img: img5 },
        { id: 6, name: "Webcam", img: img6 },
        { id: 7, name: "Mouse", img: img7 },
        { id: 8, name: "Converter & Cable", img: img8 }
    ]
    return (
        <div className='px-12 pb-16 mt-16'>
            <div className='mb-6'>
                <h2 className='text-3xl text-primary text-center font-bold'>Featured Category</h2>
                <h2 className='text-xl  text-center '>Get Your Desired Product from Featured Category!</h2>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    featureCategory.map(data => <FeatureRow
                        key={data.id}
                        data={data}
                    ></FeatureRow>)
                }
            </div>
        </div>
    );
};

export default FeatureCategory;