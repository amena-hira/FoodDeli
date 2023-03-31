import React from 'react';
import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import { Container } from 'react-bootstrap';
import './Gallery.css';
import image1 from '../../../images/dishes/1.jpg';
import image2 from '../../../images/dishes/2.jpg';
import image3 from '../../../images/dishes/3.jpg';
import image4 from '../../../images/dishes/4.jpg';
import image5 from '../../../images/dishes/5.jpg';
import image6 from '../../../images/dishes/6.jpg';
import image7 from '../../../images/dishes/7.jpg';
import image8 from '../../../images/dishes/8.jpg';

const Gallery = () => {
    return (
        <Container >
            <SlideshowLightbox className='image-gallery row g-4'>
                <img className='col' src={image1} alt=''/>
                <img className='col' src={image2} alt=''/>
                <img className='col' src={image3} alt=''/>
                <img className='col' src={image4} alt=''/>

            </SlideshowLightbox>
            <SlideshowLightbox className='image-gallery row g-4'>
                <img className='col' src={image5} alt=''/>
                <img className='col' src={image6} alt=''/>
                <img className='col' src={image7} alt=''/>
                <img className='col' src={image8} alt=''/>

            </SlideshowLightbox>
        </Container>
    );
};

export default Gallery;