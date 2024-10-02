import React from "react";
import { useParams } from "react-router-dom";
import DiscountBanner from "../components/DiscountBanner";
import Header from "../components/Header";
import { Clothes } from "../components/Clothes";
import {Counter} from "../components/Counter"
import { useState } from "react";

const ItemPage = () => {
    const { id } = useParams<{ id: string }>();
    const [activeTab, setActiveTab] = useState("details");

    if (!id) {
        return <span>Item not found</span>;
    }

    const item = Clothes.find(clothes => clothes.id === parseInt(id));

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div>
            <DiscountBanner />
            <Header />

            <div className="flex max-w-7xl m-auto gap-28 height mt-16">

                <img src={item.image} alt={item.name} className="bg-gray-100 rounded-md h-full object-contain width" />
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-40">
                            <span className="text-secondary font-bold text-3xl">{item.name}</span>
                            <img src="/images/Share.png" alt="Share" />
                        </div>
                        <div className="flex gap-3">
                            <img src="/images/Badge.png" alt="Badge" className="object-scale-down" />
                            <span className={`text-secondary font-medium border border-gray-300 px-3 py-1 rounded-3xl ${item.instock ? 'bg-green-100' : 'bg-red-100'}`}>{item.instock ? 'IN STOCK' : 'OUT OF STOCK'}</span>
                        </div>
                    </div>
                    <span className="text-secondary font-bold text-2xl">${item.price}</span>
                    <div className="flex flex-col gap-2">
                        <span className="text-gray-400 font-semibold">SELECT SIZE</span>
                        <div className="flex gap-3">
                            <button className="px-4 py-2 border border-gray-300 rounded-lg">S</button>
                            <button className="px-3 py-2 border border-gray-300 rounded-lg">M</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg">X</button>
                            <button className="px-3 py-2 border border-gray-300 rounded-lg">XL</button>
                            <button className="px-2 py-2 border border-gray-300 rounded-lg">XLL</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-gray-400 font-semibold">QUANTITY</span>
                        <div className="border border-gray-300 max-w-48 py-1 px-3 rounded-md "><Counter /></div>
                    </div>
                    <div className="flex items-center gap-5">
                        <button className="secondary text-white rounded-md py-3 px-24">Add to cart</button>
                        <button><img src="/images/Heart.png" alt="Heart" className="h-11" /></button>
                    </div>
                    <span className="text-gray-500 font-semibold">— Free shipping on orders $100+</span>

                </div>
            </div>
                <div className="mt-52 flex max-w-7xl m-auto gap-28 height">

                    <div className="flex flex-col gap-3">
                        <button className={`flex max-w-80 items-center text-secondary font-semibold ${activeTab === "details" ? 'bg-gray-100' : ''} py-2 pr-40 pl-4 rounded-md gap-3`}onClick={() => setActiveTab("details")}><img src="/images/More.png" alt="3Dots" /> Details</button>
                        <button className={`flex max-w-80 items-center text-secondary font-semibold ${activeTab === "reviews" ? 'bg-gray-100' : ''} py-2 pr-40 pl-4 rounded-md gap-3`}onClick={() => setActiveTab("reviews")}><img src="/images/Empty_Star.png" alt="EmptyStar" /> Reviews</button>
                    </div>

                    <div>
                    {activeTab === "details" ? (
                        <div className="flex flex-col max-width gap-3">
                            <h2 className="text-secondary font-bold text-xl">Detail</h2>
                            <span className="font-medium text-gray-400">Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection <br />
                            The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.</span>
                            <ol className="list-disc text-gray-500 pl-9 py-10 font-semibold">
                                <li>Premium Quality</li>
                                <li>Versatile Wardrobe Stable</li>
                                <li>Available In Various Sizes</li>
                                <li>Tailored Fit</li>
                            </ol>
                        </div>
                    ) : (
                        <div>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-secondary font-bold text-xl">Reviews</h2>
                                <div className="flex gap-3">
                                    <h2 className="text-secondary font-bold text-3xl">4.2</h2>
                                    <span className="text-gray-400 py-3">-54 reviews</span>
                                </div>
                                <button className="py-3 px-5 border border-black text-secondary font-semibold max-w-64">Write a review</button>

                                <div className="border-t flex flex-col gap-6">
                                    <div className="p-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-secondary font-semibold">Emily Davis</span>
                                            <div className="flex gap-1">
                                                <img src="/images/Star.png" alt="Star" className="object-scale-down" />
                                                <img src="/images/Star.png" alt="Star" className="object-scale-down"/>
                                                <img src="/images/Star.png" alt="Star" className="object-scale-down"/>
                                                <img src="/images/Star.png" alt="Star" className="object-scale-down"/>
                                                <img src="/images/Empty_star.png" alt="EmptyStar" />
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-400">1 WEEK AGO</span>
                                        <br /><br />
                                        <p className="text-gray-500">This company always goes above and beyond to satisfy their customers.</p>
                                    </div>

                                    <div className="p-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-secondary font-semibold">Daniel Smith</span>
                                            <div className="flex gap-1">
                                                <img src="/images/Star.png" alt="Star" className="object-scale-down" />
                                                <img src="/images/Star.png" alt="Star" className="object-scale-down"/>
                                                <img src="/images/Star.png" alt="Star" className="object-scale-down"/>
                                                <img src="/images/Star.png" alt="Star" className="object-scale-down"/>
                                                <img src="/images/Empty_star.png" alt="EmptyStar" />
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-400">2 MONTHS AGO</span>
                                        <br /><br />
                                        <p className="text-gray-500">I can't believe how affordable and high-quality this item is!</p>
                                    </div>

                                    <div className="p-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-secondary font-semibold">Benjamin Clark</span>
                                            <div className="flex gap-1">
                                                <img src="/images/Star.png" alt="Star" className="object-scale-down" />
                                                <img src="/images/Star.png" alt="Star" className="object-scale-down"/>
                                                <img src="/images/Star.png" alt="Star" className="object-scale-down"/>
                                                <img src="/images/Star.png" alt="Star" className="object-scale-down"/>
                                                <img src="/images/Empty_star.png" alt="EmptyStar" />
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-400">23 APRIL</span>
                                        <br /><br />
                                        <p className="text-gray-500">These guys know their stuff, and it shows in their products.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}

                    </div>
                    
                </div>
        </div>
    );
};

export default ItemPage;

