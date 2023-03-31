import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BookForm = () => {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const mobile = form.mobile.value;
        const date = form.date.value;
        const restaurantName = form.restaurantName.value;
        const personList = form.personList.value;
        console.log(name, email, mobile, date, restaurantName, personList);
        const bookedTable = {
            name,
            email,
            mobile,
            date,
            restaurantName,
            personList
        }
        console.log(bookedTable)

        fetch('http://localhost:5000/tableBooked', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedTable)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Your booking successfully done!!!')
                form.reset();
                navigate('/')
            })

    };
    return (
        <div>
            <h2>Book A Table</h2>
            <form class="row g-3" onSubmit={handleSubmit}>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Full Name</label>
                    <input type="text" name='name' class="form-control" id="inputEmail4" required />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Email</label>
                    <input type="email" name='email' class="form-control" id="inputPassword4" required />
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Mobile Number</label>
                    <input type="number" name='mobile' class="form-control" id="inputEmail4" required />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Date And Time</label>
                    <input type="date" name='date' class="form-control" id="inputPassword4" required />
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Restaurant Name</label>
                    <input type="text" name='restaurantName' class="form-control" id="inputEmail4" required />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">How many Person?</label>
                    <input type="number" name='personList' class="form-control" id="inputPassword4" required />
                </div>

                <div class="col-12 text-end">
                    <button type="submit" class="btn btn-danger">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default BookForm;