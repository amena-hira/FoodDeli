import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import Brands from './Brands/Brands';
import Dishes from './Dishes/Dishes';
import Offer from './Offer/Offer';
import './Home.css'
import About from './About/About';
import Member from './Member/Member';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Dishes></Dishes>
            <div className='offer pb-1'>
                <Offer></Offer>
            </div>
            <Brands></Brands>
            <div className='offer'>
                <About></About>
            </div>
            <Member></Member>
            <hr />
            <div className='my-5'>
                <h5 className='text-center fw-bold'>Operate food store or restaurants?<span className='text-danger'> Work With Us</span></h5>
            </div>
            <Footer></Footer>


        </>
    );
};

export default Home;