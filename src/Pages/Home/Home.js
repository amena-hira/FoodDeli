import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import Brands from './Brands/Brands';
import Dishes from './Dishes/Dishes';
import Offer from './Offer/Offer';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Dishes></Dishes>
            <Offer></Offer>
            <Brands></Brands>
            
        </>
    );
};

export default Home;