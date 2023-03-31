import React from 'react';
import { Container } from 'react-bootstrap';
import { FiEdit } from "react-icons/fi";
import { FcDeleteRow } from "react-icons/fc";

const BookedTable = () => {
    return (
        <Container className='my-5 px-5'>
            <h2 className='text-center mb-4'>BOOKED TABLE INFORMATION</h2>
            <div className='table-responsive'>
                <table class="table table-bordered table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Date and Time</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td className='d-flex justify-content-center'><div><FiEdit className='fs-2 me-2 text-warning'></FiEdit></div><div><FcDeleteRow className='fs-1'></FcDeleteRow></div></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td className='d-flex justify-content-center'><div><FiEdit className='fs-2 me-2 text-warning'></FiEdit></div><div><FcDeleteRow className='fs-1'></FcDeleteRow></div></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </Container>
    );
};

export default BookedTable;