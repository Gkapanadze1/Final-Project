import React, { useState, useEffect } from "react";
import DiscountBanner from "../components/Discountbanner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Clothes} from "../components/Clothes";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const CategoriesPage = () => {

    const location = useLocation();
    const { pathname } = location;
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    const [price, setPrice] = useState(890);

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value)); // Convert the value to a number
    };

    useEffect(()=> {
        window.scrollTo(0, 0)
    },[pathname])

    return (
        <div>
            <DiscountBanner />
            <Header />
            <div className="max-w-7xl m-auto flex mt-10 gap-12">
                <div className="min-h-screen">
                    <div className="w-64 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Categories</h3>
                            <div className="space-y-2">
                                <label className="flex items-center border-b-2 py-2 transition duration-150 hover:bg-gray-100 cursor-pointer px-2 gap-2">
                                    <input type="checkbox" className="form-checkbox text-blue-600 h-4 w-4 mr-2" />
                                    <span className="text-gray-500 text-base font-medium">Perfume</span>
                                </label>
                                <label className="flex items-center border-b-2 py-2 transition duration-150 hover:bg-gray-100 cursor-pointer px-2 gap-2">
                                    <input type="checkbox" className="form-checkbox text-blue-600 h-4 w-4 mr-2" />
                                    <span className="text-gray-500 text-base font-medium">Trousers</span>
                                </label>
                                <label className="flex items-center border-b-2 py-2 transition duration-150 hover:bg-gray-100 cursor-pointer px-2 gap-2">
                                    <input type="checkbox" className="form-checkbox text-blue-600 h-4 w-4 mr-2" />
                                    <span className="text-gray-500 text-base font-medium">Shoe</span>
                                </label>
                                <label className="flex items-center border-b-2 py-2 transition duration-150 hover:bg-gray-100 cursor-pointer px-2 gap-2">
                                    <input type="checkbox" className="form-checkbox text-blue-600 h-4 w-4 mr-2" />
                                    <span className="text-gray-500 text-base font-medium">Handbag</span>
                                </label>
                                <label className="flex items-center border-b-2 py-2 transition duration-150 hover:bg-gray-100 cursor-pointer px-2 gap-2">
                                    <input type="checkbox" className="form-checkbox text-blue-600 h-4 w-4 mr-2" />
                                    <span className="text-gray-500 text-base font-medium">Hat</span>
                                </label>
                                <label className="flex items-center border-b-2 py-2 transition duration-150 hover:bg-gray-100 cursor-pointer px-2 gap-2">
                                    <input type="checkbox" className="form-checkbox text-blue-600 h-4 w-4 mr-2" />
                                    <span className="text-gray-500 text-base font-medium">Thermos</span>
                                </label>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Color</h3>
                            <div className="flex space-x-3">
                                <label className="relative">
                                    <input type="radio" name="color" className="sr-only" />
                                    <span className="block w-6 h-6 rounded-full border-2 border-blue-600" style={{ backgroundColor: '#BDD7EE' }}></span>
                                </label>
                                <label className="relative">
                                    <input type="radio" name="color" className="sr-only" />
                                    <span className="block w-6 h-6 rounded-full border-2 border-gray-300" style={{ backgroundColor: '#FFD966' }}></span>
                                </label>
                                <label className="relative">
                                    <input type="radio" name="color" className="sr-only" />
                                    <span className="block w-6 h-6 rounded-full border-2 border-gray-300" style={{ backgroundColor: '#C6E0B4' }}></span>
                                </label>
                                <label className="relative">
                                    <input type="radio" name="color" className="sr-only" />
                                    <span className="block w-6 h-6 rounded-full border-2 border-gray-300" style={{ backgroundColor: '#4F81BD' }}></span>
                                </label>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Size</h3>
                            <div className="flex gap-2 mt-4">
                            {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`w-10 h-10 rounded-md border transition duration-150 ${
                                selectedSize === size ? 'border-black' : 'border-gray-200'
                                }`}>
                                    {size}
                                </button>
                                ))}
                        </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Price</h3>
                            <input 
                                type="range" 
                                min="0" 
                                max="1000" 
                                value={price} 
                                onChange={handlePriceChange} 
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="text-center mt-2 font-semibold text-gray-800">${price}.00</div>
                        </div>
                    </div>
                </div>

                <div>

                    <div className="flex flex-col gap-5 width2">

                        <h2 className="text-secondary font-semibold">Applide Filters:</h2>
                        
                        <div className="flex gap-3">
                            <span className="flex items-center text-secondary font-medium py-1 px-4 border border-gray-200 rounded-3xl gap-2">Perfume<img src="/images/close.png" alt="close" /></span>
                            <span className="flex items-center text-secondary font-medium py-1 px-4 border border-gray-200 rounded-3xl gap-2">Perfume<img src="/images/close.png" alt="close" /></span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-400 font-medium">Showing 1-9 of 36 results.</span>
                            <span className="flex items-center gap-2 text-gray-400 font-medium">SORT BY <img src="/images/Chevron_Down.png" alt="down arrow" /></span>
                        </div>

                        <div className="grid grid-cols-3 justify-between mt-5 gap-10">
                        {Clothes.map((clothes) => (
                            <Link to={`/items/${clothes.id}`}>
                            <div key={clothes.id} className="flex flex-col gap-2 items-start">
                                <img src={clothes.image} alt={clothes.name} className="bg-gray-100 w-72" />
                                <span className="font-medium text-secondary">{clothes.name}</span>
                                <div className="flex gap-3 items-center">
                                    <span className={`text-secondary font-medium border border-gray-300 px-3 py-1 rounded-3xl ${clothes.instock ? 'bg-green-100' : 'bg-red-100'}`}>
                                    {clothes.instock ? 'IN STOCK' : 'OUT OF STOCK'}</span>
                                    <span className="text-gray-400 font-normal">${clothes.price}</span>
                                </div>
                            </div>
                            </Link>
                        ))}
                        </div>

                        <div className="flex gap-5 items-center justify-center border border-gray-300 max-w-96 m-auto rounded-md px-2 py-1 mt-14 hover:cursor-pointer">
                            <img src="/images/Chevron Left.png" alt="LeftArrow" />
                            <span className="text-secondary font-bold py-1 px-3 bg-gray-200 rounded-lg">1</span>
                            <span>2</span>
                            <img src="/images/Dots.png" alt="Dots" />
                            <span>23</span>
                            <span>24</span>
                            <img src="/images/Chevron Right.png" alt="RightArrow" />
                        </div>

                    </div>

                </div>


            </div>

            <Footer />

        </div>
        
    );
}

export default CategoriesPage;
