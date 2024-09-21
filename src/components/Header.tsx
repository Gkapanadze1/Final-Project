import React from "react";

const Header = () => {

    return(
        <header className="flex items-center justify-around py-5">
            <div className="flex items-center gap-2 font-semibold text-xl">
              <a href="/"><img src="/images/Logomark.png" alt="logo"/></a>
              <h2 className="font-bold text-secondary">Ecommerce</h2>
            </div>

            <div className="flex items-center gap-9 text-gray-500 text-base font-medium">
                <a href="/">Home</a>
                <a href="/">Categories</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </div>

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