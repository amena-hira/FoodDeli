import React from 'react';
import { Card, Col, Container, Row, Badge } from 'react-bootstrap';
import card1 from '../../../images/offer/1.jpg';
import card2 from '../../../images/offer/2.png';
import card3 from '../../../images/offer/3.webp';
import card4 from '../../../images/offer/4.jpg';
import './Offer.css';

const Offer = () => {
    const cardData = [
        {
            id: 1,
            image: card1,
            label: 'OFFER',
            title: 'UP TO 50% OFF',
            message: 'OFFERS TO BRIGHTEN YOUR DAY'
        },
        {
            id: 2,
            image: card2,
            label: 'DISCOVER',
            title: 'UP TO 50% OFF',
            message: 'OFFERS TO BRIGHTEN YOUR DAY'
        },
        {
            id: 3,
            image: card3,
            label: 'TRY NOW',
            title: 'UP TO 50% OFF',
            message: 'OFFERS TO BRIGHTEN YOUR DAY'
        },
        {
            id: 4,
            image: card4,
            label: 'EXPLORE',
            title: 'UP TO 50% OFF',
            message: 'OFFERS TO BRIGHTEN YOUR DAY'
        }

    ]
    return (
        <Container className='my-5 py-1'>
            <div className='my-5'>
                <h2 className='text-center fw-bolder'>Explore Offers</h2>
            </div>

            <Row xs={1} md={2} lg={4} className="g-4">
                {cardData.map((data, idx) => (
                    <Col>
                        <Card>

                            <Card.Img src={data.image} alt="Card image" />
                            <Card.ImgOverlay className='text-white'>

                                <Card.Title> <Badge className='fw-lighter' bg="white text-danger">{data.label}</Badge> </Card.Title>
                                <Card.Body className='pt-5'>
                                    <Card.Title className='body-title pt-3'> {data.title} </Card.Title>
                                    <Card.Subtitle className='py-2'> {data.message} </Card.Subtitle>
                                </Card.Body>


                            </Card.ImgOverlay>

                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>
    );
};

export default Offer;