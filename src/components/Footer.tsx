import React from "react";

const Footer = () => {

    return(
        <footer>

            <div className="bg-gray-100 max-h-72 mt-32">

                <div className="flex items-center max-w-7xl m-auto justify-between py-14">

                    <div className="flex flex-col gap-3">
                        
                        <h2 className="text-secondary font-bold text-2xl">Join Our Newsletter</h2>
                        <span className="text-gray-500">We love to surprise our subscribers with occasional gifts.</span>

                    </div>

                    <div className="flex items-center gap-3">

                        <input type="text" placeholder="Your email address" className="px-5 py-2 rounded-md bg-gray-100 border border-gray-300" />
                        <button className="secondary text-white px-5 py-2 rounded-md">Subscribe</button>

                    </div>

                </div>

            </div>

            <div className="flex items-center max-w-7xl m-auto justify-between py-20">

                <div className="flex flex-col max-w-60 gap-3">

                    <div className="flex items-center gap-4 text-secondary font-bold text-xl">
                        <img src="/images/Ecommers_Logo.png" alt="Eccomers Logo" />
                        <span>Ecommerce</span>
                    </div>

                    <span className="text-gray-500 font-normal">DevCut is a YouTube channel for practical project-based learning.</span>

                    <div className="flex items-center gap-5 py-4">
                        <a href="/"><img src="/images/Github.png" alt="Github Logo" /></a>
                        <a href="/"><img src="/images/Instagram.png" alt="Instagram Logo" /></a>
                        <a href="/"><img src="/images/Youtube.png" alt="Youtube Logo" /></a>
                    </div>

                </div>

                <div>

                    <span className="text-gray-400 font-semibold">SUPPORT</span>

                    <div className="flex flex-col py-10 gap-3">
                        <a href="/"><span className="text-gray-700 font-semibold">FAQ</span></a>
                        <a href="/"><span className="text-gray-700 font-semibold">Terms of use</span></a>
                        <a href="/"><span className="text-gray-700 font-semibold">Privacy Policy</span></a>
                    </div>

                </div>

                <div>

                    <span className="text-gray-400 font-semibold">COMPANY</span>

                    <div className="flex flex-col py-10 gap-3">
                        <a href="/"><span className="text-gray-700 font-semibold">About us</span></a>
                        <a href="/"><span className="text-gray-700 font-semibold">Contact</span></a>
                        <a href="/"><span className="text-gray-700 font-semibold">Careers</span></a>
                    </div>

                </div>

                <div>

                    <span className="text-gray-400 font-semibold">SHOP</span>

                    <div className="flex flex-col py-10 gap-3">
                        <a href="/"><span className="text-gray-700 font-semibold">My Account</span></a>
                        <a href="/"><span className="text-gray-700 font-semibold">Checkout</span></a>
                        <a href="/"><span className="text-gray-700 font-semibold">Cart</span></a>
                    </div>

                </div>

                <div className="flex flex-col gap-3">

                    <span className="text-gray-400 font-semibold">ACCEPTED PAYMENTS</span>

                    <div className="flex items-center gap-4">
                        <a href="/"><img src="/images/Mastercard.png" alt="Mastercard" /></a>
                        <a href="/"><img src="/images/Amex.png" alt="Amex" /></a>
                        <a href="/"><img src="/images/Visa.png" alt="Visa" /></a>
                    </div>

                </div>

            </div>

            <div className="footer-border text-center py-4">
                <span className="text-gray-500 font-normal">© 2023 DevCut. All rights reserved.</span>
            </div>

        </footer>
    )
}

export default Footer