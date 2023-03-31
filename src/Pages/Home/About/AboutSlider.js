import React from 'react';
import Slider from "react-slick";
import about1 from '../../../images/about/about.avif';
import about2 from '../../../images/about/about1.webp';
import about3 from '../../../images/about/about3.jpg';


const AboutSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
    };
    return (
        <Slider {...settings}>
            <div className='about-img'>
                <img src={about1} alt="" className='img-fluid rounded' />
            </div>
            <div className='about-img'>
                <img src={about2} alt="" className='img-fluid rounded' />
            </div>
            <div className='about-img'>
                <img src={about3} alt="" className='img-fluid rounded' />
            </div>
            <div className='about-img'>
                <img src={about1} alt="" className='img-fluid rounded' />
            </div>
            <div className='about-img'>
                <img src={about2} alt="" className='img-fluid rounded' />
            </div>
            <div className='about-img'>
                <img src={about3} alt="" className='img-fluid rounded' />
            </div>
        </Slider>
    );
};

export default AboutSlider;