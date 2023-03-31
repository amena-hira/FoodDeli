import React from 'react';
import {Badge, Card} from 'react-bootstrap';
import './Brand.css';
import { BsClockHistory } from "react-icons/bs";

const Brand = ({brands}) => {
    const {id,image,title,place1,place2,dishType,time,price,badge,coupon} = brands;
    return (
        <Card className='mx-2'>
            <Card.Img className='brand-image' variant="top" src={image} />
            <Card.Body className='text-black'>
                <Card.Title className='fw-bold fs-5'>{title}</Card.Title>
                <Card.Text className='text-secondary fw-lighter'>
                    <span>{place1}</span><span className='dot'></span> <span>{place2}</span><span className='dot'></span><span>{dishType}</span>
                </Card.Text>
                <div className='time-price'>
                    <div>
                        <p  className='text-black time'><BsClockHistory></BsClockHistory> {time}</p>
                    </div>
                    <div>
                        <p  className='text-secondary text-uppercase'>{price}</p>
                    </div>
                </div>
                <div className='badge-coupon'>
                    <Badge bg="danger" className='text-uppercase'>{badge}</Badge>
                    <div className='text-black coupon'> {coupon}</div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Brand;