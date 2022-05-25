import React from 'react';
import Banner from '../components/HomeComponents/Banner';
import BusinessSummary from '../components/HomeComponents/BusinessSummary';
import ExtraPart1 from '../components/HomeComponents/ExtraPart1';
import ExtraPart2 from '../components/HomeComponents/ExtraPart2';
import FeatureCategory from '../components/HomeComponents/FeatureCategory';
import Parts from '../components/HomeComponents/Parts';
import ShowReview from '../components/HomeComponents/ShowReview';
import Footer from '../components/Shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureCategory></FeatureCategory>
            <BusinessSummary></BusinessSummary>
            <Parts></Parts>
            <ShowReview></ShowReview>
            <ExtraPart1></ExtraPart1>
            <ExtraPart2></ExtraPart2>
            <Footer></Footer>
        </div>
    );
};

export default Home;