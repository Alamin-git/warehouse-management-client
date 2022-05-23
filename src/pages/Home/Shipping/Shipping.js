import React from 'react';
import { Container } from 'react-bootstrap';
import airShipping from '../../../images/plane.jpg';
import seeShipping from '../../../images/ship.jpg';
import groundShipping from '../../../images/truck.jpg';
import './Shipping.css';

const Shipping = () => {
    return (
        <Container>
            <h2 className='mt-5 mb-5 text-center fw-bold products-header'>The Largest Shipping World Wide</h2>
            <div className='d-flex gap-3'>
                <div className='shipping-card'>
                    <h3 className='fs-4 fw-bold'>Ground Shipping</h3>
                    <img className='img-fluid' src={groundShipping} alt=''/>
                    <p className='text-muted'>Our global transportation network and overseas logistics partners all for trouble free shipping of all commodities, including dangerous goods, temperature control, and vehicles. We also provide charter vessels or aircraft for very large and specialty cargo.</p>
                    <button className='btn text-white product-btn'>Read More</button>
                </div>
                <div>
                    <h3 className='fs-4 fw-bold'>Air Freight</h3>
                    <img className='img-fluid' src={airShipping} alt=''/>
                    <p className='text-muted'>Used in conjunction with other forms of shipping, like marine, rail and ground, air freight became widely utilized as one of the central delivery options in importing and exporting in importing and exporting at the beginning beginning of the Twentieth Century.</p>
                    <button className='btn text-white product-btn'>Read More</button>
                </div>
                <div>
                    <h3 className='fs-4 fw-bold'>Ground Shipping</h3>
                    <img className='product-img' src={seeShipping} alt=''/>
                    <p className='text-muted'>It may not seem feasible for a ship to transport 75,000 tons of cargo at a time – but it certainly is. The Blue Marlin, a cargo ship owned by Dockwise, is a massive vessel that totes oil rigs, aircraft carriers, and even other cargo ships aircraft carriers, and even other cargo ships.</p>
                    <button className='btn text-white product-btn'>Read More</button>
                </div>
            </div>
        </Container>
    );
};

export default Shipping;