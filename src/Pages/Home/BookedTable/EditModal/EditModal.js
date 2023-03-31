import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const EditModal = (props) => {
    const bookedTable = props.bookedTable;
    console.log(bookedTable)
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        const form = event.target;
        event.preventDefault();
        const name = form.name.value;
        const email = form.email.value;
        const mobile = form.mobile.value;
        const date = form.date.value;
        const restaurantName = form.restaurantName.value;
        const personList = form.personList.value;
        console.log(name, email, mobile, date, restaurantName, personList);
        const editBookedTable = {
            name,
            email,
            mobile,
            date,
            restaurantName,
            personList
        }

        fetch(`https://delivery-landing-page-server.vercel.app/tableBooked/${bookedTable._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editBookedTable)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Your booking data updated!!!')
                navigate('/');
                props.setModalShow(false)
            })
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
                    <form class="row g-3" onSubmit={handleSubmit}>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Full Name</label>
                            <input type="text" name='name' defaultValue={bookedTable.name} class="form-control" id="inputEmail4" required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Email</label>
                            <input type="email" name='email' defaultValue={bookedTable.email} class="form-control" id="inputPassword4" required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Mobile Number</label>
                            <input type="number" name='mobile' defaultValue={bookedTable.mobile} class="form-control" id="inputEmail4" required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Date And Time</label>
                            <input type="date" name='date' defaultValue={bookedTable.date} class="form-control" id="inputPassword4" required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Restaurant Name</label>
                            <input type="text" name='restaurantName' defaultValue={bookedTable.restaurantName} class="form-control" id="inputEmail4" required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">How many Person?</label>
                            <input type="number" name='personList' defaultValue={bookedTable.personList} class="form-control" id="inputPassword4" required />
                        </div>

                        <div class="col-12 text-end">
                            <Button className='btn-secondary me-2' onClick={props.onHide}>Close</Button>
                            <button type="submit" class="btn btn-danger">Submit</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default EditModal;