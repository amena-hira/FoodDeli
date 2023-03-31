import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import Brands from './Brands/Brands';
import Dishes from './Dishes/Dishes';
import Offer from './Offer/Offer';
import './Home.css'
import About from './About/About';
import Member from './Member/Member';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import TableForm from './TableForm/TableForm';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Dishes></Dishes>
            <div className='offer pb-1'>
                <Offer></Offer>
            </div>
            <Brands></Brands>
            <div className='pt-5 pb-3'>
                <TableForm></TableForm>
            </div>
            <div className='my-5 pt-3 pb-5'>
                <div className='pb-4'>
                    <h1 className='text-center'>Gallery</h1>
                    <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /><span className='text-danger'>Click On the image to see the Full image</span></p>
                </div>
                <Gallery></Gallery>
            </div>
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