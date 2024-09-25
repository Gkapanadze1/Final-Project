import React from "react";

const BestSeller = () => {

    return(

        <section className="mt-32 max-w-7xl m-auto">

            <div className="flex flex-col items-start gap-3 max-w-36 m-auto">

                <span className="text-gray-400 font-medium text-sm">SHOP NOW</span>
                <h2 className="font-bold text-2xl text-secondary">Best Selling</h2>

            </div>

            <div className="grid grid-cols-4 justify-between mt-24">

                <div className="flex flex-col gap-2 items-start">

                    <img src="/images/T-Shirt4.png" alt="T-Shirt" className="bg-gray-100 w-72" />

                    <span className="font-medium text-secondary">Classic Monochrome Tees</span>

                    <div className="flex gap-3 items-center">
                        <span className="text-secondary font-medium border border-gray-300 px-3 py-1 rounded-3xl">IN STOCK</span>
                        <span className="text-gray-400 font-normal">$35.00</span>
                    </div>

                </div>
                
                <div className="flex flex-col items-start gap-2">

                    <img src="/images/T-Shirt3.png" alt="T-Shirt" className="bg-gray-100 w-72" />

                    <span className="font-medium text-secondary">Monochromatic Wardrobe</span>

                    <div className="flex gap-3 items-center">

                        <span className="text-secondary font-medium border border-gray-300 px-3 py-1 rounded-3xl">IN STOCK</span>
                        <span className="text-gray-400 font-normal">$27.00</span>

                    </div>

                </div>

                <div className="flex flex-col items-start gap-2">

                    <img src="/images/T-Shirt2.png" alt="T-Shirt" className="bg-gray-100 w-72" />

                    <span className="font-medium text-secondary">Essential Neutrals</span>

                    <div className="flex gap-3 items-center">

                        <span className="text-secondary font-medium border border-gray-300 px-3 py-1 rounded-3xl">IN STOCK</span>
                        <span className="text-gray-400 font-normal">$22.00</span>

                    </div>

                </div>

                <div className="flex flex-col items-start gap-2">

                    <img src="/images/T-Shirt1.png" alt="T-Shirt" className="bg-gray-100 w-72" />

                    <span className="font-medium text-secondary">UTRAANET Black</span>

                    <div className="flex gap-3 items-center">

                        <span className="text-secondary font-medium border border-gray-300 px-3 py-1 rounded-3xl">IN STOCK</span>
                        <span className="text-gray-400 font-normal">$43.00</span>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default BestSeller