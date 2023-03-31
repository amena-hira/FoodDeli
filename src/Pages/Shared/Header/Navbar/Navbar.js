// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../../../images/logo.jpg';
// import './Navbar.css'
// import "bootstrap/js/src/collapse";

// const Navbar = () => {
//     const [isNavCollapsed, setIsNavCollapsed] = useState(true);

//     const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
//     return (
//         <div className='container'>
//             <nav className="navbar navbar-expand-lg nav bg-white">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" href="#"><img className='logo' src={logo} alt="logo..." /></Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link className="nav-link active" aria-current="page" href="#">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" href="#">Offers</Link>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Resturant
//                                 </Link>
//                                 <ul className="dropdown-menu">
//                                     <li><Link className="dropdown-item" href="#">Action</Link></li>
//                                     <li><Link className="dropdown-item" href="#">Another action</Link></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><Link className="dropdown-item" href="#">Something else here</Link></li>
//                                 </ul>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" href="#">About</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" href="#">Contact</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;