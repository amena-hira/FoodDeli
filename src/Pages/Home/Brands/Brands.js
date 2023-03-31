import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import LeftArrow from '../../../images/arrows/left-arrow.svg';
import RightArrow from '../../../images/arrows//right-arrow.svg';
import dish1 from '../../../images/dishes/1.jpg';
import dish2 from '../../../images/dishes/2.jpg';
import dish3 from '../../../images/dishes/3.jpg';
import dish4 from '../../../images/dishes/4.jpg';
import dish5 from '../../../images/dishes//5.jpg';
import dish6 from '../../../images/dishes/6.jpg';
import dish7 from '../../../images/dishes/7.jpg';
import dish8 from '../../../images/dishes/8.jpg';
import Brand from './Brand/Brand';
import './Brands.css';
const Brands = () => {
    const brandsData = [
        {
            id: 1,
            image: dish1,
            title: 'Polo Lounge',
            place1: 'North Indian',
            place2: 'Indian',
            dishType: 'Pure Veg',
            time: '15-25 min',
            price: '$250 For Two',
            badge: 'offer',
            coupon: '65% off | Use Coupon OSAHAN50'
        },
        {
            id: 2,
            image: dish2,
            title: 'Polo Lounge',
            place1: 'North Indian',
            place2: 'Indian',
            dishType: 'Pure Veg',
            time: '15-25 min',
            price: '$250 For Two',
            badge: 'offer',
            coupon: '65% off | Use Coupon OSAHAN50'
        },
        {
            id: 3,
            image: dish3,
            title: 'Polo Lounge',
            place1: 'North Indian',
            place2: 'Indian',
            dishType: 'Pure Veg',
            time: '15-25 min',
            price: '$250 For Two',
            badge: 'offer',
            coupon: '65% off | Use Coupon OSAHAN50'
        },
        {
            id: 4,
            image: dish4,
            title: 'Polo Lounge',
            place1: 'North Indian',
            place2: 'Indian',
            dishType: 'Pure Veg',
            time: '15-25 min',
            price: '$250 For Two',
            badge: 'offer',
            coupon: '65% off | Use Coupon OSAHAN50'
        },
        {
            id: 5,
            image: dish5,
            title: 'Polo Lounge',
            place1: 'North Indian',
            place2: 'Indian',
            dishType: 'Pure Veg',
            time: '15-25 min',
            price: '$250 For Two',
            badge: 'offer',
            coupon: '65% off | Use Coupon OSAHAN50'
        },
        {
            id: 6,
            image: dish6,
            title: 'Polo Lounge',
            place1: 'North Indian',
            place2: 'Indian',
            dishType: 'Pure Veg',
            time: '15-25 min',
            price: '$250 For Two',
            badge: 'offer',
            coupon: '65% off | Use Coupon OSAHAN50'
        },
        {
            id: 7,
            image: dish7,
            title: 'Polo Lounge',
            place1: 'North Indian',
            place2: 'Indian',
            dishType: 'Pure Veg',
            time: '15-25 min',
            price: '$250 For Two',
            badge: 'offer',
            coupon: '65% off | Use Coupon OSAHAN50'
        },
        {
            id: 8,
            image: dish8,
            title: 'Polo Lounge',
            place1: 'North Indian',
            place2: 'Indian',
            dishType: 'Pure Veg',
            time: '15-25 min',
            price: '$250 For Two',
            badge: 'offer',
            coupon: '65% off | Use Coupon OSAHAN50'
        }
    ]
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
    );
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    };
    return (
        <Container className='my-5 brands py-1'>
            <div className='my-5'>
                <h2 className='h2 fw-bolder text-center'>Popular Brands</h2>
                <p className='text-secondary text-center'>Top restaurants, cafes, pubs, and bars in Mumbai, based on trends</p>
            </div>
            <div>
                <Slider {...settings}>
                    {brandsData.map(brands => <div> <Brand brands={brands}></Brand></div>)}
                </Slider>
            </div>
        </Container>
    );
};

export default Brands;