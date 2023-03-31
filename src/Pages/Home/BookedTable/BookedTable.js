import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import EditModal from './EditModal/EditModal';
import { FiEdit } from "react-icons/fi";
import { FcDeleteRow } from "react-icons/fc";

const BookedTable = () => {
    const bookedTablesList = useLoaderData();
    const [modalShow, setModalShow] = useState(false);
    const [bookedTable, setBookedTable] = useState('');

    const getData = (id) =>{
        fetch(`http://localhost:5000/tableBooked/${id}`)
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            setBookedTable(data)
            setModalShow(true)
        })
    }
    const deleteData =(id)=>{
        fetch(`http://localhost:5000/tableBooked/${id}`,{
            method: 'Delete',
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
        })
    }
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
                            <th scope="col">Restaurant Name</th>
                            <th scope="col">Person List</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookedTablesList.map((tableList, index) => <tr>
                                <th scope="row">{index}</th>
                                <td>{tableList.name}</td>
                                <td>{tableList.email}</td>
                                <td>{tableList.mobile}</td>
                                <td>{tableList.date}</td>
                                <td>{tableList.restaurantName}</td>
                                <td>{tableList.personList}</td>
                                <td className='d-flex justify-content-center'><div><FiEdit onClick={()=> getData(tableList._id)} className='fs-2 me-2 text-warning'></FiEdit></div><div><FcDeleteRow onClick={()=>deleteData(tableList._id)} className='fs-1'></FcDeleteRow></div></td>
                            </tr>)
                        }

                    </tbody>
                </table>
                <EditModal show={modalShow}
                    onHide={() => setModalShow(false)} bookedTable={bookedTable}></EditModal>
            </div>

        </Container>
    );
};

export default BookedTable;