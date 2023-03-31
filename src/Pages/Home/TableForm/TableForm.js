import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BookForm from './BookForm/BookForm';
import Order from './Order/Order';
import './TableForm.css'

const TableForm = () => {
    return (
        <div className='offer pt-3 pb-3'>
            <Container>
                <Row className='book-table g-2'>
                    <Col md={6} lg={7} className='bg-white rounded p-3'>
                    <BookForm></BookForm>
                    </Col>
                    <Col md={5} lg={4} className='bg-white rounded'>
                        <Order></Order>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default TableForm;