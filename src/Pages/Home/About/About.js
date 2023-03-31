import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import './About.css';
import AboutSlider from './AboutSlider';

const About = () => {
    return (
        <Container className='my-5 py-5'>
            <Row className='about-us'>
                <Col sm={12} md={6} className='text-black'>
                    <h1>About <span className='text-danger'>Us</span></h1>
                    <p className='divider'></p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                        <br />
                        <br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                        <br /><br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy.</p>
                    <Button variant="outline-danger" className='px-4 py-2'>Reserve Now</Button>
                </Col>
                <Col sm={12} md={6} className='about-slider'>
                    <AboutSlider></AboutSlider>
                </Col>
            </Row>

        </Container>
    );
};

export default About;