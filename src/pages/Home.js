import React from 'react';
import Banner from '../components/HomeComponents/Banner';
import FeatureCategory from '../components/HomeComponents/FeatureCategory';
import Parts from '../components/HomeComponents/Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureCategory></FeatureCategory>
            <Parts></Parts>

        </div>
    );
};

export default Home;