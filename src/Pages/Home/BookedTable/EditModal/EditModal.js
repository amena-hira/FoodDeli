import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const EditModal = (props) => {
    const [validated, setValidated] = useState(false);
    const bookedTable = props.bookedTable;
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        // const form = event.currentTarget;
        const form = event.target;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            event.preventDefault();
            const name = event.target.fullName.value;
            const email = event.target.email.value;
            const mobile = event.target.mobile.value;
            const date = event.target.date.value;
            const restaurantName = event.target.restaurantName.value;
            const personList = event.target.personList.value;
            console.log(name, email, mobile, date, restaurantName, personList);
            const bookedTable = {
                name,
                email,
                mobile,
                date,
                restaurantName,
                personList
            }
            setValidated(true);

            fetch('http://localhost:5000/tableBooked', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookedTable)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    navigate('/');
                })
        }
    };
    return (
        <div>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Full name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name='fullName'
                                    placeholder="Full name"
                                    defaultValue={bookedTable.name}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                <Form.Label>Email Address</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    <Form.Control
                                        type="email"
                                        name='email'
                                        placeholder="Email Address"
                                        defaultValue={bookedTable.email}
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        readOnly
                                        disabled
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a email.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="text" name='mobile' defaultValue={bookedTable.mobile} placeholder="Mobile Number" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid mobile number.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label>Date And Time</Form.Label>
                                <Form.Control type="date" name='date' defaultValue={bookedTable.date} placeholder="Date And Time" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid time.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>Restaurant Name</Form.Label>
                                <Form.Control type="text" defaultValue={bookedTable.restaurantName} name='restaurantName' placeholder="Restaurant Name" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid restaurant name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label>How many Person</Form.Label>
                                <Form.Control type="number" defaultValue={bookedTable.personList} name='personList' placeholder="Person Number" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid number.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <div className='text-end'>
                            <Button className='me-2 btn-secondary'
                             onClick={props.onHide}>Close</Button>
                            <Button type="submit" className='btn-danger'>Submit</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default EditModal;