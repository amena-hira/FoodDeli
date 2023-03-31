import React from 'react';
import Figure from 'react-bootstrap/Figure';
import './DishCarousel.css';

const DishCarousel = ({ dish }) => {
    
    return (
        <Figure>
            <Figure.Image
                alt="80x80"
                src={dish.img}
                roundedCircle
            />
            <Figure.Caption className='text-center text-black'>
                {dish.dishName}
            </Figure.Caption>
            <Figure.Caption className='text-center text-black'>
                {dish.available}
            </Figure.Caption>
        </Figure>
    );
};

export default DishCarousel;