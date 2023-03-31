import React from 'react';
import './HeaderContain.css';
import Typed from 'react-typed';

const HeaderContain = () => {
    return (

        <div className='header-wraper'>
            <div className='main-info'>
                <h1 className='h1 fw-bolder'>Find Awesome Deals in India</h1>
                <p className='fs-3'>List of top <Typed
                    className='typed-text'
                    strings={['restaurants', 'cafes', 'pubs', 'bars']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                ></Typed>  in India, based on trends</p>
                <div className='search-box'>
                    <div class="input-group h-75 mb-3">
                        <input type="text" class="form-control" placeholder="Enter Your Favourite Restaurant Name" aria-label="Enter Your Favourite Restaurant Name" aria-describedby="button-addon2" />
                        <button class="btn  search" type="button" id="button-addon2">Search</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HeaderContain;