import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer text-white mt-5'>
        <Container>
            <div className='d-flex align-items-center justify-content-between pt-5 pb-3 '>
                <div className='w-50'>
                    <p>Copyright &copy; 2022. All Rights Reserved By Alamin</p>
                </div>
                <div>
                    <ul className='d-flex'>
                        <li className='footer-li me-3'>Terms of Use</li>
                        <li className='footer-li me-3'>Legal Disclaimer</li>
                        <li className='footer-li me-3'>Privacy Policy</li>
                        <li className='footer-li me-3'>Support</li>
                        <li className='footer-li me-3'>Sitemap</li>
                    </ul>
                </div>
            </div>
        </Container>
        </div>
    );
};

export default Footer;