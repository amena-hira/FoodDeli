import React from 'react';
import { FiEdit } from "react-icons/fi";
import { FcDeleteRow } from "react-icons/fc";

const TableData = ({tableList, setModalShow}) => {
    const {name,email,mobile,date,restaurantName,personList} = tableList;
    return (
        <tr>
            <th scope="row">1</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{mobile}</td>
            <td>{date}</td>
            <td>{restaurantName}</td>
            <td>{personList}</td>
            <td className='d-flex justify-content-center'><div onClick={() => setModalShow(true)}><FiEdit className='fs-2 me-2 text-warning'></FiEdit></div><div><FcDeleteRow className='fs-1'></FcDeleteRow></div></td>
        </tr>
    );
};

export default TableData;