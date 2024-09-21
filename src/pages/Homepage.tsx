import React from "react";
import Discountbanner from '../components/Discountbanner';
import Header from '../components/Header';
import FreshArrivals from "../components/FreshArrivals";


const Homepage = () => {


    return(
        <div>
            <Discountbanner />
            <Header />
            <FreshArrivals />
        </div>
    )
}

export default Homepage