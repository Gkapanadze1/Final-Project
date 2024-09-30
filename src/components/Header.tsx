import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {

    return(
        <header className="flex items-center justify-between py-5 max-w-7xl m-auto">
            <div className="flex items-center gap-2 font-semibold text-xl">
              <Link to="/"><img src="/images/Logomark.png" alt="logo"/></Link>
              <h2 className="font-bold text-secondary">Ecommerce</h2>
            </div>

            <nav className="flex items-center gap-9 text-gray-500 text-base font-medium">
                <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
            </nav>

            <div className="flex items-center gap-7">

                <div className="flex border-2 border-gray-300 rounded-md items-center px-4">
                    <img src="/images/Search_icon.png" alt="SearchIcon" />
                    <input type="text" placeholder="Search products" className="p-2 border-none outline-none" />
                </div>

                <div className="flex items-center gap-7">
                    <button><img src="/images/Cart_icon.png" alt="CartIcon" /></button>
                    <button><img src="/images/User_icon.png" alt="UserIcon" /></button>
                </div>

            </div>
        </header>
    )
}

export default Header