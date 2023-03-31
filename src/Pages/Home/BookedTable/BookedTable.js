import React, { useState } from 'react';
import { Badge, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import EditModal from './EditModal/EditModal';
import { FiEdit } from "react-icons/fi";
import { FcDeleteRow } from "react-icons/fc";
import DeleteModal from './DeleteModal/DeleteModal';

const BookedTable = () => {
    // const navigate = useNavigate();
    const bookedTablesList = useLoaderData();
    const [modalShow, setModalShow] = useState(false);
    const [modalDeleteShow, setModalDeleteShow] = useState(false);
    const [bookedTable, setBookedTable] = useState('');
    const [bookedId, setBookedId] = useState('');
    const [bookedIdName, setBookedIdName] = useState('');

    const getData = (id) => {
        setBookedId(id)
        fetch(`https://delivery-landing-page-server.vercel.app/tableBooked/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookedTable(data)
                setModalShow(true)
            })
    }
    const handleDelete = (id, name) => {
        setModalDeleteShow(true);
        setBookedId(id);
        setBookedIdName(name);

    }

    return (
        <>
            {
                bookedTablesList.length === 0 ?
                    ''
                    :
                    <Container className='my-5 px-5'>
                        <h2 className='text-center mb-4'>BOOKED TABLE INFORMATION<sup className='fs-6'><Badge className='ms-2' bg="warning fw-lighter" pill>
                            CRUD
                        </Badge></sup></h2>
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
                                            <th scope="row">{index + 1}</th>
                                            <td>{tableList.name}</td>
                                            <td>{tableList.email}</td>
                                            <td>{tableList.mobile}</td>
                                            <td>{tableList.date}</td>
                                            <td>{tableList.restaurantName}</td>
                                            <td>{tableList.personList}</td>
                                            <td className='d-flex justify-content-center'><div><FiEdit onClick={() => getData(tableList._id)} className='fs-2 me-2 text-warning'></FiEdit></div><div><FcDeleteRow onClick={() => handleDelete(tableList._id, tableList.name)} className='fs-1'></FcDeleteRow></div></td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                            <EditModal show={modalShow}
                                onHide={() => setModalShow(false)} setModalShow={setModalShow} bookedTable={bookedTable}></EditModal>
                            <div>
                                <DeleteModal
                                    show={modalDeleteShow}
                                    onHide={() => setModalDeleteShow(false)}
                                    bookedId={bookedId}
                                    bookedIdName={bookedIdName}
                                    setModalDeleteShow={setModalDeleteShow}
                                ></DeleteModal>
                            </div>
                        </div>

                    </Container>
            }
        </>
    );
};

export default BookedTable;