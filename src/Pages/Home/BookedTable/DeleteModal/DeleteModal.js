import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const DeleteModal = (props) => {
    const navigate = useNavigate();
    const deleteData = (id) => {
        // setModalShow(true)
        fetch(`http://localhost:5000/tableBooked/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(`${props.bookedIdName}'s booking is canceled!`)
                props.setModalDeleteShow(false);
                navigate('/')
            })
    }
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Booking Cancel
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Are you sure to delete your name <span className='text-danger'>{props.bookedIdName}'s</span> booking?
                </p>
                <div className='text-end'
                >
                    <Button className='me-2 btn-warning' onClick={props.onHide}>No</Button>
                    <Button onClick={()=>deleteData(props.bookedId)} className='btn-danger'>Yes</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default DeleteModal;