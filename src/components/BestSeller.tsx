import React from "react";
import {Tshirts} from "./TshirtsArray"

const BestSeller = () => {

    return(

        <section className="mt-32 max-w-7xl m-auto">

            <div className="flex flex-col items-start gap-3 max-w-36 m-auto">

                <span className="text-gray-400 font-medium text-sm">SHOP NOW</span>
                <h2 className="font-bold text-2xl text-secondary">Best Selling</h2>

            </div>

        <div className="grid grid-cols-4 justify-between mt-24">
            {Tshirts.map((tshirt) => (
            <div key={tshirt.id} className="flex flex-col gap-2 items-start">
              <img src={tshirt.image} alt={tshirt.name} className="bg-gray-100 w-72" />
              <span className="font-medium text-secondary">{tshirt.name}</span>
                <div className="flex gap-3 items-center">
                    <span className={`text-secondary font-medium border border-gray-300 px-3 py-1 rounded-3xl ${tshirt.instock ? 'bg-green-100' : 'bg-red-100'}`}>
                    {tshirt.instock ? 'IN STOCK' : 'OUT OF STOCK'}</span>
                    <span className="text-gray-400 font-normal">${tshirt.price}</span>
                </div>
            </div>
      ))}
        </div>

        </section>
    )
}

export default BestSeller