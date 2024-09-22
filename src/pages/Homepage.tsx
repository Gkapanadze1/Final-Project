import React from "react";
import DiscountBanner from '../components/DiscountBanner';
import Header from '../components/Header';
import FreshArrivals from "../components/FreshArrivals";
import BestSeller from "../components/BestSeller";


const Homepage = () => {


    return(
        <div>
            <DiscountBanner />
            <Header />
            <FreshArrivals />
            <BestSeller />
        </div>
    )
}

export default Homepage