import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const OrderList = () => {
    return (
        <ListGroup as="ol" numbered>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-center"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Chicken</div>
                    Tikka Sub
                </div>
                <Badge bg="secondary" pill>
                    $314
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-center"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Roll</div>
                    Cheese Corn
                </div>
                <Badge bg="secondary" pill>
                    $260
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-center"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Veg</div>
                    Mixed
                </div>
                <Badge bg="secondary" pill>
                    $122
                </Badge>
            </ListGroup.Item>
        </ListGroup>
    );
};

export default OrderList;