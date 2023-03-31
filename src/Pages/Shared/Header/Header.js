import React from 'react';
import HeaderContain from './HeaderContain';
import NavbarBot from './Navbar/NavbarBot';

const header = () => {
    return (
        <>
            <NavbarBot></NavbarBot>
            <HeaderContain></HeaderContain>
        </>
    );
};

export default header;