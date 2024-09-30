import React from "react";
import { useParams } from "react-router-dom";
import DiscountBanner from "../components/DiscountBanner";
import Header from "../components/Header";
import { Clothes } from "../components/Clothes";
import {Counter} from "../components/Counter"

const ItemPage = () => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div>Item not found</div>;
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
                        <div className="border border-gray-300 max-w-48 py-1 px-3 rounded-md ">{Counter()}</div>
                    </div>
                    <div className="flex items-center gap-5">
                        <button className="secondary text-white rounded-md py-3 px-24">Add to cart</button>
                        <button><img src="/images/Heart.png" alt="Heart" className="h-11" /></button>
                    </div>
                    <span className="text-gray-500 font-semibold">— Free shipping on orders $100+</span>

                </div>
            </div>
        </div>
    );
};

export default ItemPage;

