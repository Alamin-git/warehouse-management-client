import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Progress from '../Progress/Progress';
import Shipping from '../Shipping/Shipping';

const Main = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Shipping/>
            <Progress/>
        </div>
    );
};

export default Main;