import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <Container className='d-flex justify-content-center align-items-center flex-column not-found'>
            <h1 className='mb-5 text-danger'>404</h1>
            <h3 className='mb-3'>OOPS!!</h3>
            <h3>Page Not Found</h3>
        </Container>
    );
};

export default NotFound;