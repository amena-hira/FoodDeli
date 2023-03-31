import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import OrderList from './OrderList';
import wallet from '../../../../images/wallet.png';

const Order = () => {
    return (
        <div className='p-4'>
            <h2>Your Order</h2>
            <h6>6 ITEMS</h6>
            <OrderList></OrderList>
            <Row className='my-4'>
                <Col xs={4} md={3} lg={5}>
                    <img src={wallet} alt="" style={{ width: '4rem' }} />
                </Col>
                <Col xs={7} md={9} lg={7} className='text-end'>
                    <h4 className='my-0'>Subtotal : <span className='text-danger'>$456.4</span></h4>
                    <p className='text-secondary my-0'>Extra charges may apply</p>
                    <p>You have saved $240 on the bill</p>
                </Col>
            </Row>
            <div className='d-grid'>
                <Button variant="danger" size="lg">
                    CheckOut
                </Button>
            </div>
        </div>
    );
};

export default Order;