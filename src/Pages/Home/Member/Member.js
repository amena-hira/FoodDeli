import React from 'react';
import { Button } from 'react-bootstrap';
import './Member.css';
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Member = () => {
    return (
        <div className='my-5 py-4 member'>
            <h1>Become a Member</h1>
            <p className='text-secondary'>Lorem, ipsum is simply dummy text of</p>
            <p className='divider member-divider'></p>
            <div className='mt-5'>
                <Button variant="danger" className='px-5 py-2 account-btn'>Create an Account <IoIosArrowDroprightCircle></IoIosArrowDroprightCircle></Button>
            </div>
        </div>
    );
};

export default Member;