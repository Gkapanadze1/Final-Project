import React from "react";
import {Clothes} from "./Clothes";
import { Link } from 'react-router-dom';

const MoreClothes = () => {

    return(
        <section className="mt-32 max-w-7xl m-auto">

            <div className="flex items-center justify-center gap-3">
                <button className="text-secondary font-medium border border-gray-300 px-3 py-1 rounded-3xl">Featured</button>
                <button className="text-gray-600 font-medium px-3 py-1 rounded-3xl">Latest</button>
            </div>

            <div className="grid grid-cols-4 justify-between mt-24">
            {Clothes.slice(4, 8).map((clothes) => (
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
        </section>
    )
}

export default MoreClothes