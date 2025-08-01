import React from "react";
import DiscountBanner from '../components/Discountbanner';
import Header from '../components/Header';
import FreshArrivals from "../components/FreshArrivals";
import BestSeller from "../components/BestSeller";
import StartBrowsing from "../components/StartBrowsing";
import MoreClothes from "../components/MoreClothes";
import Footer from "../components/Footer";


const HomePage = () => {


    return(
        <div>
            <DiscountBanner />
            <Header />
            <FreshArrivals />
            <BestSeller />
            <StartBrowsing />
            <MoreClothes />
            <Footer />
        </div>
    )
}

export default HomePage