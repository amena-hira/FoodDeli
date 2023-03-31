import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg';
import './Footer.css'

const Footer = () => {
    return (
        <div className='offer'>
            
            <div class="container">
                <footer class="pt-5 pb-1">
                    <div class="row footer-row">
                        <div class="col-md-5  mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" class="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                    <button class="btn btn-danger" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        <div class="col mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column footer-column">
                                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">Home</Link></li>
                                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">Features</Link></li>
                                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">Pricing</Link></li>
                                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">FAQs</Link></li>
                                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">About</Link></li>
                            </ul>
                        </div>

                        <div class="col mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column footer-column">
                                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">Home</Link></li>
                                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">Features</Link></li>
                                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">Pricing</Link></li>
                                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">FAQs</Link></li>
                                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">About</Link></li>
                            </ul>
                        </div>

                        <div class="col mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column footer-column">
                                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">Home</Link></li>
                                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">Features</Link></li>
                                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">Pricing</Link></li>
                                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">FAQs</Link></li>
                                <li class="nav-item mb-2"><Link href="#" class="nav-link p-0 text-muted">About</Link></li>
                            </ul>
                        </div>


                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2023 Hira, Inc. All rights reserved.</p>
                        <ul class="list-unstyled d-flex">
                            <li class="ms-3"><Link class="link-dark" href="#"></Link></li>
                            <li class="ms-3"><Link class="link-dark" href="#"></Link></li>
                            <li class="ms-3"><Link class="link-dark" href="#"></Link></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;