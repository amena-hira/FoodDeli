import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import DishCarousel from './DishCarousel/DishCarousel';
import dish1 from '../../../images/dishes/1.jpg';
import dish2 from '../../../images/dishes/2.jpg';
import dish3 from '../../../images/dishes/3.jpg';
import dish4 from '../../../images/dishes/4.jpg';
import dish5 from '../../../images/dishes//5.jpg';
import dish6 from '../../../images/dishes/6.jpg';
import dish7 from '../../../images/dishes/7.jpg';
import dish8 from '../../../images/dishes/8.jpg';

const Dishes = () => {
    const dishData = [
        {
            id: 1,
            img: dish1,
            dishName: 'American',
            available: '968'
        },
        {
            id: 2,
            img: dish2,
            dishName: 'Indian',
            available: '156'
        },
        {
            id: 3,
            img: dish3,
            dishName: 'Chicken',
            available: '40'
        },
        {
            id: 4,
            img: dish4,
            dishName: 'Pizza',
            available: '120'
        },
        {
            id: 5,
            img: dish5,
            dishName: 'Healthy',
            available: '130'
        },
        {
            id: 6,
            img: dish6,
            dishName: 'Vegetarian',
            available: '140'
        },
        {
            id: 7,
            img: dish7,
            dishName: 'Dessert',
            available: '56'
        },
        {
            id: 8,
            img: dish8,
            dishName: 'Chinese',
            available: '111'
        },
        {
            id: 9,
            img: dish6,
            dishName: 'Hamburgers',
            available: '958'
        },
        {
            id: 10,
            img: dish4,
            dishName: 'Italian',
            available: '468'
        },
        {
            id: 11,
            img: dish3,
            dishName: 'Beef',
            available: '260'
        },
        {
            id: 12,
            img: dish5,
            dishName: 'Diet',
            available: '500'
        }
    ]
    const settings = {
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <Container className='my-5'>
            <div className='my-5'>
                <h2 className='h2 fw-bolder text-center '>Popular Dishes</h2>
                <p className='text-secondary text-center'>Exciting dishes are going on, Check it and grab it!</p>
            </div>
            <div>
                <Slider {...settings} >
                    {dishData.map(dish => <div> <DishCarousel dish={dish}></DishCarousel></div>)}
                </Slider>
            </div>
        </Container>
    );
};

export default Dishes;