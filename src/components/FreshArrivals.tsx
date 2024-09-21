import React from "react";

const FreshArrivals = () => {


    return(
        <section className="flex items-center justify-around max-h-100 bg-gray-100">
    
            <div>
                <div className="flex flex-col gap-3">
                    <h2 className="text-4xl font-semibold text-secondary">Fresh Arrivals Online</h2>
                    <span className="text-gray-500 font-medium">Discover Our Newest Collection Today.</span>
                </div>

                <button className="secondary flex text-white items-center px-10 py-3 rounded-md gap-3 mt-9">View Collection <img src="/images/Right_Arrow.png" alt="RightArrow" /></button>
            </div>

            <img src="/images/Hero_Image.png" alt="HeroImage" className="object-scale-down h-96" />

        </section>
    )
}

export default FreshArrivals